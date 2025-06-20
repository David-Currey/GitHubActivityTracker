using System.Net.Http.Json;
using GitHubActivityTracker.Models;

namespace GitHubActivityTracker.Services;

public class GitHubService
{
    private readonly HttpClient _http;

    public GitHubService(HttpClient http)
    {
        _http = http;
    }

    public async Task<List<GitHubEvent>> GetRecentEventsAsync(string username)
    {
        var url = $"https://api.github.com/users/{username}/events";
        var request = new HttpRequestMessage(HttpMethod.Get, url);

        // safe default, could change
        request.Headers.UserAgent.ParseAdd("Mozilla/5.0");

        var response = await _http.SendAsync(request);
        response.EnsureSuccessStatusCode();

        var events = await response.Content.ReadFromJsonAsync<List<GitHubEvent>>();
        return events ?? new List<GitHubEvent>();
    }
}
