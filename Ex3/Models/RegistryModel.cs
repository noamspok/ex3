using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Ex3.Models
{
    public class RegistryModel
    {

        public int Id { get; set; }
       
        public String UserName { get; set; }
        [Required]
        public string Password { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public int Wins { get; set; }
        public int Loses { get; set; }
    } 
}
