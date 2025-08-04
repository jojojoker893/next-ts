import { NextRequest, NextResponse } from "next/server";

type ArticleRequest = {
  article: {
    title: string
    description: string
    body: string
    tagList: string[]
  }
}

type ArticleResponse = {
  article: {
    slug: string
    title: string
    description: string
    body: string
    tagList: string[]
    createdAt: string
    updatedAt: string
  }
}

function slugify(title: string): string {
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

export async function POST(req: NextRequest) {
  const { article }: ArticleRequest = await req.json()

  const slug = slugify(article.title)
  const now = new Date().toISOString()

  const response: ArticleResponse = {
    article: {
      slug,
      title: article.title,
      description: article.description,
      body: "It takes a Jacobian",
      tagList: ["dragons", "training"],
      createdAt: now,
      updatedAt: now
    },
  }
  return NextResponse.json(response)
}