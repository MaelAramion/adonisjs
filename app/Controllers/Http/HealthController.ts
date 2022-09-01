// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import HealthCheck from "@ioc:Adonis/Core/HealthCheck";

export default class HealthController {
  public async health({response, view}){
    const report = await HealthCheck.getReport()


    return view.render('health', {report})
  }
}
