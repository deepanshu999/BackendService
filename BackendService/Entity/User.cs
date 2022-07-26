using System.ComponentModel.DataAnnotations;

namespace BackendService.Entity
{
    public class User
    {
        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Name { get; set; } = null!;

        [Key]
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = null!;

        [Required]
        public string Phone { get; set; } = null!;

        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; } = null!;
  
    }
}
