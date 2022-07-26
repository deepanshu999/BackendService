using BackendService.Entity;

namespace ServiceBackend.DataLayer
{
    public interface IUserRepository
    {
        Task<User> RegisterUser(User user);
        Task<User?> ValidatedUser(string email, string password);

    }
}
