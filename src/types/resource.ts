export interface Resource {
  id: string;
  title: string;
  description: string;
  url: string;
  category: string;
  thumbnail: string;
  tags: string[];
  featured?: boolean;
}

export type Category = 
  | 'Listening'
  | 'Grammar'
  | 'AI Tools'
  | 'Vocabulary'
  | 'Speaking'
  | 'Reading'
  | 'Writing'
  | 'Pronunciation'
  | 'General';
