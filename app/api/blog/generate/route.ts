import { NextResponse } from 'next/server';
import { openai } from '@/lib/services/openai/client';

export async function POST(req: Request) {
  try {
    if (!openai) {
      return NextResponse.json(
        { success: false, error: 'OpenAI API is not configured' },
        { status: 503 }
      );
    }

    const { topic } = await req.json();
    
    if (!topic?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Topic is required' },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        {
          role: "system",
          content: `You are a medical content writer for PRIVA Dr. Create informative and engaging content about ${topic}.`
        },
        {
          role: "user",
          content: `Write a comprehensive blog post about ${topic}. Include relevant medical information, research, and practical advice.`
        }
      ],
      temperature: 0.7,
      max_tokens: 1000
    });

    const content = completion.choices[0]?.message?.content;

    if (!content) {
      throw new Error('No response received from AI');
    }

    return NextResponse.json({ 
      success: true, 
      content 
    });
  } catch (error) {
    console.error('Error generating blog post:', error);
    return NextResponse.json(
      { 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to generate blog post' 
      },
      { status: 500 }
    );
  }
}