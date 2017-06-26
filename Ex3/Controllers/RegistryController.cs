using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using Ex3.Models;

namespace Ex3.Controllers
{
    public class RegistryController : ApiController
    {
        private Ex3Context db = new Ex3Context();


        // GET: api/Registry
        public IQueryable<RegistryModel> GetRegistryModels()
        {
            return db.RegistryModels;
        }

        // GET: api/Registry/5
        [ActionName("GetUserName")]
        public IEnumerable<RegistryModel> GetRegistryModel(string UserName)
        {
            
            return db.RegistryModels.Where(m => m.UserName == UserName);
        }

        // PUT: api/Registry/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutRegistryModel(string id, RegistryModel registryModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != registryModel.UserName)
            {
                return BadRequest();
            }

            db.Entry(registryModel).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!RegistryModelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Registry
        [ResponseType(typeof(RegistryModel))]
        public IHttpActionResult PostRegistryModel(RegistryModel registryModel)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.RegistryModels.Add(registryModel);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (RegistryModelExists(registryModel.UserName))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = registryModel.UserName }, registryModel);
        }

        // DELETE: api/Registry/5
        [ActionName("RemoveUserName")]
        public IEnumerable<RegistryModel> DeleteRegistryModel(string userName)
        {
            RegistryModel registryModel = db.RegistryModels.Find(userName);
            

            db.RegistryModels.Remove(registryModel);
            db.SaveChanges();

            return db.RegistryModels.Where(m => m.UserName == userName); ;
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool RegistryModelExists(string id)
        {
            return db.RegistryModels.Count(e => e.UserName == id) > 0;
        }
    }
}