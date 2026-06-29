import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Box, Link as MuiLink, Typography } from "@mui/material";

const MarkdownRenderer = ({ content }) => {
  return (
    <Box
      className="markdown"
      sx={{
        lineHeight: 1.8,
        fontSize: "1.02rem",
        color: "text.primary",
      }}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
          blockquote: ({ children }) => (
            <Box
              sx={{
                p: 2,
                backgroundColor: (theme) => theme.palette.background.paper,
                border: "solid 0.5px",
                borderColor: "primary.main",
                borderLeft: "solid 5px",
                borderLeftColor: "primary.main",
              }}
            >
              <Typography>{children}</Typography>
            </Box>
          ),
          h1: ({ children }) => (
            <Typography variant="h4" sx={{ mt: 5, mb: 3, fontWeight: 700 }}>
              {children}
            </Typography>
          ),
          h2: ({ children }) => (
            <Typography variant="h5" sx={{ mt: 4, mb: 2.5, fontWeight: 600 }}>
              {children}
            </Typography>
          ),
          h3: ({ children }) => (
            <Typography variant="h6" sx={{ mt: 3.5, mb: 2, fontWeight: 600 }}>
              {children}
            </Typography>
          ),
          p: ({ children }) => (
            <Typography sx={{ mb: 2.5, lineHeight: 1.85 }}>
              {children}
            </Typography>
          ),
          a: ({ href, children }) => (
            <MuiLink
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                color: "primary.main",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              {children}
            </MuiLink>
          ),
          // code: ({children}) =>
          //     (<Box
          //         sx={{
          //             backgroundColor: "rgba(0, 0, 0, 0.15)",
          //             fontFamily: 'JetBrains Mono',
          //             padding: "3px 7px",
          //             borderRadius: "6px",
          //             fontSize: "0.92em",
          //         }}
          //     >
          //         {children}
          //     </Box>),
          pre: ({ children }) => (
            <Box
              component="pre"
              sx={{
                backgroundColor: (theme) => theme.palette.background.paper,
                color: "text.primary",
                fontFamily: "JetBrains Mono",
                p: 2,
                borderRadius: 3,
                overflowX: "auto",
                my: 3,
              }}
            >
              <code
                style={{
                  fontFamily: "JetBrains Mono",
                }}
              >
                {children}
              </code>
            </Box>
          ),
          table: ({ children }) => (
            <Box sx={{ overflowX: "auto", my: 4 }}>
              <table style={{ width: "100%", borderCollapse: "collapse" }}>
                {children}
              </table>
            </Box>
          ),
          thead: ({ children }) => (
            <thead style={{ backgroundColor: "#1E40AF", color: "white" }}>
              {children}
            </thead>
          ),
          th: ({ children }) => (
            <th
              style={{
                padding: "14px 16px",
                textAlign: "left",
                borderBottom: "2px solid #334155",
              }}
            >
              {children}
            </th>
          ),
          td: ({ children }) => (
            <td
              style={{
                padding: "14px 16px",
                borderBottom: "1px solid #334155",
              }}
            >
              {children}
            </td>
          ),
          tr: ({ children, isHeader }) => (
            <tr
              style={{
                backgroundColor: isHeader
                  ? undefined
                  : "rgba(255,255,255,0.03)",
                "&:nth-of-type(even)": {
                  backgroundColor: "rgba(255,255,255,0.06)",
                },
              }}
            >
              {children}
            </tr>
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </Box>
  );
};

export default MarkdownRenderer;
