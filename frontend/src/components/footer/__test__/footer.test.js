import React from 'react';
import Footer from '../footer';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FaExternalLinkSquareAlt } from 'react-icons/fa';

let getByTestId;

beforeEach(() => {
  const component = render(<Footer />);
  getByTestId = component.getByTestId;
})

afterEach(cleanup);

test("header1 renders with correct text", () => {
  const headerEl = getByTestId("header1-footer");

  expect(headerEl.textContent).toBe("Helpful Links");
});

test("should show Academic Calendar link works", () => {
  expect(screen.getByText("Academic Calendar").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show Developers link works", () => {
  expect(screen.getByText("Developers").closest("a")).toHaveAttribute("href", "/developers");
});  

test("should show Blockchain link works", () => {
  expect(screen.getByText("Blockchain").closest("a")).toHaveAttribute("href", "/blockchain");
});  

test("should show Leadership link works", () => {
  expect(screen.getByText("Leadership").closest("a")).toHaveAttribute("href", "/");
}); 


test("should show Careers link works", () => {
  expect(screen.getByText("Careers").closest("a")).toHaveAttribute("href", "/");
}); 


test("should show Events link works", () => {
  expect(screen.getByText("Events").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show News link works", () => {
  expect(screen.getByText("News").closest("a")).toHaveAttribute("href", "/");
}); 

test("header2 renders with correct text", () => {
  const headerEl = getByTestId("header2-footer");

  expect(headerEl.textContent).toBe("Visit Patton U");
});

test("should show Faculty & Staff link works", () => {
  expect(screen.getByText("Faculty & Staff").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show Support link works", () => {
  expect(screen.getByText("Support Center").closest("a")).toHaveAttribute("href", "/support");
});

test("should show FAQ link works", () => {
  expect(screen.getByText("FAQ").closest("a")).toHaveAttribute("href", "/faq");
}); 

test("should show Alumni link works", () => {
  expect(screen.getByText("Alumni").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show Privacy link works", () => {
  expect(screen.getByText("Privacy").closest("a")).toHaveAttribute("href", "/");
});

test("should show Terms link works", () => {
  expect(screen.getByText("Terms").closest("a")).toHaveAttribute("href", "/");
});

test("header3 renders with correct text", () => {
  const headerEl = getByTestId("header3-footer");

  expect(headerEl.textContent).toBe("Departments");
});

test("should show Business link works", () => {
  expect(screen.getByText("Business").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show Education link works", () => {
  expect(screen.getByText("Education").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show Research link works", () => {
  expect(screen.getByText("Research").closest("a")).toHaveAttribute("href", "/");
}); 

test("paragraph element renders with correct text", () => {
  const paragraphEl = getByTestId("paragraph-footer");

  expect(paragraphEl.textContent).toBe("Houston, Texas");
});

test("should show Univercity Privacy link works", () => {
  expect(screen.getByText("Univercity Privacy |").closest("a")).toHaveAttribute("href", "/");
}); 

test("should show Terms link works", () => {
  expect(screen.getByText("Terms |").closest("a")).toHaveAttribute("href", "/");
});

test("should show Copyright link works", () => {
  expect(screen.getByText("Copyright |").closest("a")).toHaveAttribute("href", "/");
});

test("should show Site Information link works", () => {
  expect(screen.getByText("Site Information |").closest("a")).toHaveAttribute("href", "/");
});

test("should show Contact link works", () => {
  expect(screen.getByText("Contact").closest("a")).toHaveAttribute("href", "/");
});