import { api } from "../libs/axios"

async function getUser(username: string) {
  try {    
    return await api.get(`users/${username}`)
  } catch (error) {
    console.error(error)
    return {
      data: []
    }
  }
}

async function getListIssues(username: string, repo: string, query = '') {
  try {
    return await api.get(`search/issues?q=${query} repo:${username}/${repo}`)
  } catch (error) {
    console.error(error)
    return {
      data: []
    }
  }
}

async function getDetailsIssues(username:string, repo: string, id: string) {
  https://api.github.com/repos/rocketseat-education/reactjs-github-blog-challenge/issues/1 
  try {
    return await api.get(`repos/${username}/${repo}/issues/${id}`)
  } catch (error) {
    console.error(error)
    return {
      data: []
    }
  }
}

export const Github = {
  getUser,
  getListIssues,
  getDetailsIssues,
}