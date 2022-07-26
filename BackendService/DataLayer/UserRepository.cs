using BackendService.Context;
using BackendService.Entity;
using Microsoft.EntityFrameworkCore;

namespace ServiceBackend.DataLayer
{
    public class UserRepository : IUserRepository
    {
        private readonly ServerDbContext myDb;

        public UserRepository(ServerDbContext myDb)
        {
            this.myDb = myDb;
        }
        public async Task<User> RegisterUser(User user)
        {
            return (await this.myDb.Users.AddAsync(user)).Entity;
        }

        public async Task<User?> ValidatedUser(string email, string password)
        {
            var user = await this.myDb.Users.SingleOrDefaultAsync(x => x.Email == email && x.Password == password);
            return user;
        }
    }
}
