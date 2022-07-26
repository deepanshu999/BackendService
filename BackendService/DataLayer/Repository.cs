using BackendService.Context;
using ServiceBackend.DataLayer;

namespace BackendService.DataLayer
{
    public class Repository : IRepository
    {
        private readonly ServerDbContext dBContext;
        public IUserRepository UserRepository { get; }
        public Repository(ServerDbContext dBContext)
        {
            this.UserRepository = new UserRepository(dBContext);
            this.dBContext = dBContext;
        }

        public async Task SaveAsync()
        {
            await this.dBContext.SaveChangesAsync();
        }
    }
}
