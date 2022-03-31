package esmeta.web.routes

import akka.http.scaladsl.model.*
import akka.http.scaladsl.server.Directives.*
import akka.http.scaladsl.server.Route
import io.circe.*, io.circe.syntax.*, io.circe.parser.*,
io.circe.generic.semiauto.*
import esmeta.web.*
import esmeta.cfg.CFG
import esmeta.interp.util.Debugger

// exec router
object ExecRoute {
  // TODO parameters for `/exec/run`
  // case class RunParams(breakpoints: List[Breakpoint], compressed: String)

  /** conversion for HTTP response */
  given Conversion[Debugger#StepResult, String] = _.ordinal.toString

  // root router
  def apply(cfg: CFG): Route = {
    post {
      concat(
        path("run") {
          entity(as[String]) { raw =>
            decode[(String, List[(Int, Boolean)])](raw) match
              case Left(err) => ??? // TODO handle error
              case Right((sourceText, bpData)) =>
                initDebugger(cfg, sourceText)
                for { (fid, enabled) <- bpData } debugger.addBreak(fid, enabled)
            complete(HttpEntity(ContentTypes.`application/json`, "null"))
          }
        },
        // spec step
        path("specStep") {
          complete(
            HttpEntity(ContentTypes.`application/json`, debugger.specStep),
          )
        },
        // spec step-over
        path("specStepOver") {
          complete(
            HttpEntity(ContentTypes.`application/json`, debugger.specStepOver),
          )
        },
        // spec step-out
        path("specStepOut") {
          complete(
            HttpEntity(ContentTypes.`application/json`, debugger.specStepOut),
          )
        },
        // spec continue
        path("specContinue") {
          complete(
            HttpEntity(ContentTypes.`application/json`, debugger.continue),
          )
        },
        // TODO js steps
        // path("jsStep") {
        //   complete(HttpEntity(ContentTypes.`application/json`, ""))
        // },
        // path("jsStepOver") {
        //   complete(HttpEntity(ContentTypes.`application/json`, ""))
        // },
        // path("jsStepOut") {
        //   complete(HttpEntity(ContentTypes.`application/json`, ""))
        // },
      )
    }
  }
}