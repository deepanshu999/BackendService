using BackendService.DataLayer;
using BackendService.Entity;
using BackendService.Models;
using Microsoft.AspNetCore.Mvc;
using System.Security.Cryptography;
using System.Text;

namespace ServiceBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IRepository repository;

        public AuthController(IRepository repository)
        {
            this.repository = repository;
        }

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] UserRequestModel userModel)
        {
            var user = new User
            {
                Name = userModel.Name,
                Email = userModel.Email,
                Phone = userModel.Phone,
                Password = HashString(userModel.Password),
         
            };
            var result = await repository.UserRepository.RegisterUser(user);
            await repository.SaveAsync();
            return Ok(result);
        }

        private string HashString(string sourceString)
        {
            using (var md5Hash = MD5.Create())
            {
                // Byte array representation of source string
                var sourceBytes = Encoding.UTF8.GetBytes(sourceString);

                // Generate hash value(Byte Array) for input data
                var hashBytes = md5Hash.ComputeHash(sourceBytes);

                // Convert hash byte array to string
                var hash = BitConverter.ToString(hashBytes).Replace("-", string.Empty);

                // Output the MD5 hash
                return hash;
            }
        }
        [HttpPost]
        public async Task<IActionResult> Login(LoginRequestModel loginModel)
        {
            var hashedPassword = HashString(loginModel.Password);
            var result = await this.repository.UserRepository.ValidatedUser(loginModel.Email, hashedPassword);
            /*if(result is not null)
            {
                var token = JWT.GenerateToken(result.Id.ToString(), result.Name);
                return Ok(new {success = true, auth_token = token});
            }*/
            return Ok(result);
        }
    }
}