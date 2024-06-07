interface Option {
  answer: string;
  question?: string;
  character?: string;
  options?: Option[];
}

interface Node {
  question: string;
  options: Option[];
}

export { Option, Node };