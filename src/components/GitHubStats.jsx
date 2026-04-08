import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GitFork, Star, FolderGit2 } from "lucide-react";

export default function GitHubStats({ username }) {
  const [stats, setStats] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (!username) return;
    let mounted = true;

    async function loadStats() {
      try {
        const userRes = await fetch(`https://api.github.com/users/${username}`);
        if (!userRes.ok) throw new Error("Failed");
        const user = await userRes.json();

        const reposRes = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposRes.ok) throw new Error("Failed");
        const repos = await reposRes.json();

        const totalStars = repos.reduce((acc, repo) => acc + (repo.stargazers_count || 0), 0);
        const forks = repos.reduce((acc, repo) => acc + (repo.forks_count || 0), 0);

        if (mounted) {
          setStats({
            repos: user.public_repos || 0,
            followers: user.followers || 0,
            stars: totalStars,
            forks
          });
        }
      } catch {
        if (mounted) setError(true);
      }
    }

    loadStats();
    return () => {
      mounted = false;
    };
  }, [username]);

  if (!username || error || !stats) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="mx-auto max-w-6xl px-5 pb-8 md:px-8"
    >
      <div className="grid gap-4 md:grid-cols-4">
        <StatCard label="Public Repos" value={stats.repos} icon={<FolderGit2 size={16} />} />
        <StatCard label="Followers" value={stats.followers} icon={<GitFork size={16} />} />
        <StatCard label="Total Stars" value={stats.stars} icon={<Star size={16} />} />
        <StatCard label="Total Forks" value={stats.forks} icon={<GitFork size={16} />} />
      </div>
    </motion.section>
  );
}

function StatCard({ label, value, icon }) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      className="rounded-xl border border-border bg-card p-4"
    >
      <div className="mb-2 flex items-center gap-2 text-primary">{icon}</div>
      <p className="text-2xl font-bold">{value}</p>
      <p className="text-sm text-muted">{label}</p>
    </motion.div>
  );
}
