namespace GitHubActivityTracker.Models;

using System.Text.Json.Serialization;

public class GitHubEvent
{
    [JsonPropertyName("type")]
    public string Type { get; set; }

    [JsonPropertyName("actor")]
    public GitHubActor Actor { get; set; }

    [JsonPropertyName("repo")]
    public GitHubRepo Repo { get; set; }

    [JsonPropertyName("created_at")]
    public DateTime CreatedAt { get; set; }
}


public class GitHubActor
{
    public string Login { get; set; }
    public string AvatarUrl { get; set; }
}

public class GitHubRepo
{
    public string Name { get; set; }
}
