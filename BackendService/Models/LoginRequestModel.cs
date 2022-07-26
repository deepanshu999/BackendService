using System.ComponentModel.DataAnnotations;

namespace BackendService.Models
{
    public class LoginRequestModel
    {
        [Required]
        [DataType(DataType.EmailAddress)]
        public string Email { get; set; } = null!;

        [Required]
        [StringLength(50, MinimumLength = 6)]
        public string Password { get; set; } = null!;
    }
}
