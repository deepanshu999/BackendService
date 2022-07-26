using ServiceBackend.DataLayer;

namespace BackendService.DataLayer
{
    public interface IRepository
    {
        public IUserRepository UserRepository { get; }
        Task SaveAsync();
    }
}
