using BackendService.Entity;
using Microsoft.EntityFrameworkCore;

namespace BackendService.Context
{
    public partial class ServerDbContext : DbContext
    {
        #region DB Tables
        public DbSet<Entity.User> Users { get; set; }
        #endregion
        public ServerDbContext()
        {
        }

        public ServerDbContext(DbContextOptions<ServerDbContext> options)
            : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasIndex(x => x.Email)
                .IsUnique();
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
