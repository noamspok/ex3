﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Web.Http;

namespace Ex3
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "SingleApi",
                routeTemplate: "api/{controller}/{name}/{rows}/{cols}",
                defaults: new { controller = "Single" }
            );

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );
        }
    }
}
