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
