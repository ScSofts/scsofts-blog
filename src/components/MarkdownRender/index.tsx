import { type Components } from "react-markdown";
import rehypeMathJaxSvg from "rehype-mathjax/svg";
import remarkMath from "remark-math";
import remarkGFM from "remark-gfm";
import { chalk_filter } from "@/components/ChalkEffect";
import dynamic from "next/dynamic";
import rehypeRaw from "rehype-raw";
import Script from "next/script";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/atom-one-dark.css";

export interface MarkdownRenderProps {
  content: string;
}

const Markdown = dynamic(() => import("react-markdown"), { ssr: false });

export default function MarkdownRender({ content}: MarkdownRenderProps) {
  const components = createComponents();

  return (
    <Markdown
      components={components}
      rehypePlugins={[rehypeMathJaxSvg, rehypeHighlight, rehypeRaw]}
      remarkPlugins={[remarkMath, remarkGFM]}
      remarkRehypeOptions={{
        allowDangerousHtml: true,
      }}
    >
      {content}
    </Markdown>
  );
}

const createComponents = () => ({
  button({ children, node: _node, ...props }) {
    return (
      <button
        {...props}
        className={
          "m-1.5 rounded-full border-2 border-solid border-white px-4 py-1 font-bold hover:border-amber-100 hover:italic" +
          chalk_filter +
          (props.className ?? "")
        }
      >
        {children}
      </button>
    );
  },
  h1({ children, node: _node, ...props }) {
    return (
      <>
        <h1
          className={
            "mb-1.5 text-center text-6xl font-extrabold italic leading-loose text-red-400 xl:text-6xl" +
            chalk_filter +
            (props.className ?? "")
          }
          {...props}
        >
          {children}
        </h1>
        <hr className={"mb-2 mt-2" + chalk_filter} />
      </>
    );
  },

  h2({ children, node: _node, ...props }) {
    return (
      <>
        <h2
          className={
            "mb-1.5 text-4xl font-extrabold italic leading-loose text-cyan-400 xl:text-4xl hover:before:bg-white" +
            chalk_filter +
            (props.className ?? "")
          }
          {...props}
        >
          {children}
        </h2>
      </>
    );
  },

  h3({ children, node: _node, ...props }) {
    return (
      <>
        <h3
          className={
            "mb-1.5 text-3xl font-extrabold italic leading-loose text-green-400 xl:text-3xl" +
            chalk_filter +
            (props.className ?? "")
          }
          {...props}
        >
          {children}
        </h3>
      </>
    );
  },

  h4({ children, node: _node, ...props }) {
    return (
      <>
        <h4
          className={
            "mb-1.5 text-2xl font-extrabold italic leading-loose text-yellow-400 xl:text-2xl" +
            chalk_filter +
            (props.className ?? "")
          }
          {...props}
        >
          {children}
        </h4>
      </>
    );
  },

  h5({ children, node: _node, ...props }) {
    return (
      <>
        <h5
          className={
            "mb-1.5 text-xl font-extrabold italic leading-loose text-blue-400 xl:text-xl" +
            chalk_filter +
            (props.className ?? "")
          }
          {...props}
        >
          {children}
        </h5>
      </>
    );
  },

  h6({ children, node: _node, ...props }) {
    return (
      <>
        <h6
          className={
            "mb-1.5 text-lg font-extrabold italic leading-loose text-purple-400 xl:text-lg" +
            chalk_filter +
            (props.className ?? "")
          }
          {...props}
        >
          {children}
        </h6>
      </>
    );
  },

  hr({ children, node: _node, ...props }) {
    return (
      <hr
        className={"mb-2 mt-2" + chalk_filter + (props.className ?? "")}
        {...props}
      >
        {children}
      </hr>
    );
  },

  "mjx-container"({
    children,
    node: _node,
    ...props
  }: {
    children: React.ReactNode;
    [key: string]: unknown;
  }) {
    const Container = "mjx-container" as unknown as React.ElementType;
    return (
      <Container {...props} class={"flex items-center justify-center"}>
        {children}
      </Container>
    );
  },

  script({ children, node: _node, ...props }) {
    return (
      <Script {...props} src={props.src ? handlePath(props.src) : undefined}>
        {children}
      </Script>
    );
  },

  pre({ children, node: _node, ...props }) {
    return (
      <pre
        className={
          "rounded-md text-sm lg:text-xl text-white" + (props.className ?? "")
        }
        {...props}
      >
        {children}
      </pre>
    );
  },

  code({ node: _node, className, children, ...props }) {
    return (
      <code className={className} {...props}>
        {children}
      </code>
    )
  },

  img({ children, node: _node, ...props }) {
    return (
      // eslint-disable-next-line @next/next/no-img-element,jsx-a11y/alt-text
      <img
        {...props}
        className={
          "m-auto block rounded-md" + chalk_filter + (props.className ?? "")
        }
        src={props.src ? handlePath(props.src) : undefined}
      >
        {children}
      </img>
    );
  },

  a({ children, node: _node, ...props }) {
    return (
      <a
        {...props}
        className={
          "text-xl text-sky-500 hover:text-sky-300 underline underline-offset-4" + chalk_filter + (props.className ?? "")
        }
        href={props.href ? handlePath(props.href) : undefined}
      >
        {children}
      </a>
    );
  }
} as Partial<Components>);

const handlePath = (inputPath: string) => {
  if (inputPath.startsWith("http")) {
    return inputPath;
  }
  return inputPath.replace(/^.*?\/public/, "");
};