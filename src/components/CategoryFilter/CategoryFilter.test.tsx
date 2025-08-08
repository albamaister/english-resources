import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CategoryFilter from "./index";
import { ThemeProvider } from "styled-components";
import { theme } from "@/lib/theme";

describe("CategoryFilter", () => {
  const categories = ["Listening", "Grammar", "Speaking"] as const;
  const resourceCounts = {
    All: 10,
    Listening: 3,
    Grammar: 4,
    Speaking: 3,
  };

  it("renders all category buttons including All", () => {
    render(
      <ThemeProvider theme={theme}>
        <CategoryFilter
          categories={[...categories]}
          selectedCategory="All"
          onCategoryChange={() => {}}
          resourceCounts={resourceCounts}
        />
      </ThemeProvider>
    );

    // All categories + "All"
    expect(screen.getByText(/All/i)).toBeInTheDocument();
    expect(screen.getByText(/Listening/i)).toBeInTheDocument();
    expect(screen.getByText(/Grammar/i)).toBeInTheDocument();
    expect(screen.getByText(/Speaking/i)).toBeInTheDocument();
  });

  it("highlights the selected category", () => {
    render(
      <ThemeProvider theme={theme}>
        <CategoryFilter
          categories={[...categories]}
          selectedCategory="Grammar"
          onCategoryChange={() => {}}
          resourceCounts={resourceCounts}
        />
      </ThemeProvider>
    );

    const selectedButton = screen.getByText(/Grammar/i).closest("button");
    expect(selectedButton).toHaveStyle("border: 2px solid rgb(59, 130, 246)");
  });

  it("calls onCategoryChange when a category is clicked", async () => {
    const user = userEvent.setup();
    const onCategoryChange = jest.fn();

    render(
      <ThemeProvider theme={theme}>
        <CategoryFilter
          categories={[...categories]}
          selectedCategory="All"
          onCategoryChange={onCategoryChange}
          resourceCounts={resourceCounts}
        />
      </ThemeProvider>
    );

    const grammarButton = screen.getByText(/Grammar/i);
    await user.click(grammarButton);

    expect(onCategoryChange).toHaveBeenCalledTimes(1);
    expect(onCategoryChange).toHaveBeenCalledWith("Grammar");
  });
});
