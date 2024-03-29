import { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
const Nav = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  margin: 16px;
`;

const Button = styled.button`
  border: none;
  border-radius: 8px;
  padding: 8px;
  margin: 0;
  background: black;
  color: white;
  font-size: 1rem;

  &:hover {
    background: tomato;
    cursor: pointer;
    transform: translateY(-2px);
  }

  &[disabled] {
    background: grey;
    cursor: revert;
    transform: revert;
  }

  &[aria-current] {
    background: #94b1b9;
    font-weight: bold;
    cursor: revert;
    transform: revert;
  }
`;

type PageType = {
  total: number;
  limit: number;
  page: number;
  setPage: Dispatch<SetStateAction<number>>;
};

function Pagination({ total, limit, page, setPage }: PageType) {
  const numPages = Math.ceil(total / limit);

  return (
    <>
      <Nav>
        <Button onClick={() => setPage(page - 1)} disabled={page === 1}>
          &lt;
        </Button>
        {Array(numPages)
          .fill(0)
          .map((_, i) => (
            <Button
              key={i + 1}
              onClick={() => {
                setPage(i + 1);
              }}
              aria-current={page === i + 1 ? true : undefined} // 수정된 부분
            >
              {i + 1}
            </Button>
          ))}
        <Button onClick={() => setPage(page + 1)} disabled={page === numPages}>
          &gt;
        </Button>
      </Nav>
    </>
  );
}

export default Pagination;
