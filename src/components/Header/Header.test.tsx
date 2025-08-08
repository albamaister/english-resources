import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { ThemeProvider } from "styled-components";
import Header from ".";
import { theme } from "@/lib/theme";

describe("Header", () => {
  it("renders the title and search input", () => {
    render(
      <ThemeProvider theme={theme}>
        <Header searchTerm="" onSearchChange={() => {}} favoritesCount={0} />
      </ThemeProvider>
    );

    expect(screen.getByText(/englishhub/i)).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText(/search resources/i)
    ).toBeInTheDocument();
  });

  it("calls onSearchChange when user types", async () => {
    const user = userEvent.setup();
    const onSearchChange = jest.fn(); 

    render(
      <ThemeProvider theme={theme}>
        <Header
          searchTerm=""
          onSearchChange={onSearchChange}
          favoritesCount={0}
        />
      </ThemeProvider>
    );

    const input = screen.getByPlaceholderText(/Search resources.../i);
    await user.type(input, "grammar");

    expect(onSearchChange).toHaveBeenCalledTimes(7);
    expect(onSearchChange).toHaveBeenLastCalledWith("r");
  });
});
