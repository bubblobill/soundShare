//import { Octokit } from "octokit";

const octokit = new Octokit({ });

const result = await octokit.request('GET /repos/bubblobill/soundShare/contents/audio', {
  owner: 'OWNER',
  repo: 'REPO',
  path: 'PATH',
  headers: {
    'X-GitHub-Api-Version': '2022-11-28'
  }
})
document.getElementById("response").innerText = result;
