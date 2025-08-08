import { theme } from "@/lib/theme";
import { render, screen } from "@testing-library/react";
import { ThemeProvider } from "styled-components";
import ResourceCard from ".";

const mockResource = {
  id: "teste-id",
  title: "Test Resource",
  description: "This is a test resource.",
  thumbnail: "https://via.placeholder.com/150",
  url: "https://example.com",
  category: "Education",
  tags: ["tag1", "tag2", "tag3", "tag4"],
};

const renderWithTheme = (component: React.ReactElement) => {
  return render(<ThemeProvider theme={theme}>{component}</ThemeProvider>);
};

describe("ResourceCard", () => {
  it("renders title, description, category, and up to 3 tags", () => {
    renderWithTheme(
      <ResourceCard
        resource={mockResource}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />
    );

    expect(screen.getByText("Test Resource")).toBeInTheDocument();
    expect(screen.getByText("This is a test resource.")).toBeInTheDocument();
    expect(screen.getByText("Education")).toBeInTheDocument();
    expect(screen.getByText("#tag1")).toBeInTheDocument();
  });

  it("calls onToggleFavorite when favorite button is clicked", () => {
    const onToggleFavorite = jest.fn();

    renderWithTheme(
      <ResourceCard
        resource={mockResource}
        isFavorite={false}
        onToggleFavorite={onToggleFavorite}
      />
    );

    const favoriteButton = screen.getByTitle("Add to favorites");
    favoriteButton.click();

    expect(onToggleFavorite).toHaveBeenCalledWith("teste-id");
  });

  it("opens a new when clicking the visit button", () => {
    window.open = jest.fn();

    renderWithTheme(
      <ResourceCard
        resource={mockResource}
        isFavorite={false}
        onToggleFavorite={() => {}}
      />
    );

    const visitButton = screen.getByText("Visit Resource");
    visitButton.click();

    expect(window.open).toHaveBeenCalledWith("https://example.com", "_blank");
  });
});
