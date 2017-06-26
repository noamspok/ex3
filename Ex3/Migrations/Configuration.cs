namespace Ex3.Migrations
{
    using Ex3.Models;
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<Ex3.Models.Ex3Context>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
        }

        protected override void Seed(Ex3.Models.Ex3Context context)
        {
            //  This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method 
            //  to avoid creating duplicate seed data. E.g.
            //
            //    context.People.AddOrUpdate(
            //      p => p.FullName,
            //      new Person { FullName = "Andrew Peters" },
            //      new Person { FullName = "Brice Lambson" },
            //      new Person { FullName = "Rowan Miller" }
            //    );
            //
           // context.RegistryModels.AddOrUpdate(
             //   new RegistryModel { UserName = "noam", Password = "12345", Email = "123@gmail.com",Wins=0, Loses=2 },
               // new RegistryModel { UserName = "Yehoshua", Password = "123456", Email = "Y123@gmail.com", Wins=2, Loses = 0 });
        }
    }
}
