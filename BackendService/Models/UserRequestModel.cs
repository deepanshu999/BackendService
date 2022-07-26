using System.ComponentModel.DataAnnotations;

namespace BackendService.Models
{
    public class UserRequestModel
    {
        [Required]
        [StringLength(50, MinimumLength = 3)]
        public string Name { get; set; } = null!;

        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = null!;

        [Required]
        public string Phone { get; set; } = null!;

        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; } = null!;

        [Required]
        [StringLength(50, MinimumLength = 6)]
        [Compare("Password")]
        public string ConfirmPassword { get; set; } = null!;
    }
}
