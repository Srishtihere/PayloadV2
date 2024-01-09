import { useEffect, useState } from "react";
import {
  Container,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
  DropdownItem,
  Card,
  CardTitle,
  CardText,
  Input,
  Table,
  Button,
  PaginationLink,
  PaginationItem,
  Pagination,
} from "reactstrap";

import style from "./MainBody.module.css";
import OrderData from "../../assets/Data";

const MainBody: React.FC = () => {
  const [dropdownName, setDropdownName] = useState<string>("Last Month");
  const [totalPrice, setTotalPrice] = useState<number>(0);
  useEffect(() => {
    if (OrderData.length > 0) {
      const TotalOrderAmt = OrderData.reduce(
        (acc, item) => acc + item.orderAmt,
        0
      );
      const TotalTransactionAmt = OrderData.reduce(
        (acc, item) => acc + item.transactionFees,
        0
      );
      setTotalPrice(TotalOrderAmt - TotalTransactionAmt);
    }
  }, []);

  return (
    <Container fluid="md" className={style.container}>
      <div className="d-flex">
        <div className="w-75">
          <p className="fs-4 mb-0">Overview</p>
        </div>
        <div className="w-25 d-flex align-items-end justify-content-end">
          <UncontrolledDropdown>
            <DropdownToggle
              style={{
                color: "black",
                backgroundColor: "white",
                borderColor: "#D9D9D9",
              }}
              caret
            >
              {dropdownName}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem
                onClick={() => {
                  setDropdownName("Last Month");
                }}
              >
                Last Month
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setDropdownName("Last 2 Months");
                }}
              >
                Last 2 months
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setDropdownName("Last 4 Months");
                }}
              >
                Last 4 months
              </DropdownItem>
              <DropdownItem
                onClick={() => {
                  setDropdownName("Last 6 Months");
                }}
              >
                Last 6 months
              </DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
      <div className="d-flex">
        <Card
          body
          className="my-2"
          style={{
            width: "18rem",
            border: "20px solid rgba(255, 255, 255, 0)",
          }}
        >
          <CardText style={{ color: "#4D4D4D" }}>Online Orders</CardText>
          <CardTitle tag="h2">{OrderData.length}</CardTitle>
        </Card>
        <Card
          body
          className="ms-4 my-2"
          style={{
            width: "18rem",
            border: "20px solid rgba(255, 255, 255, 0)",
          }}
        >
          <CardText style={{ color: "#4D4D4D" }}>Amount received</CardText>
          <CardTitle tag="h2">₹ {totalPrice}</CardTitle>
        </Card>
      </div>
      <div className="fs-5 my-3">Transactions | This Month</div>
      <div
        className="d-flex flex-column "
        style={{
          backgroundColor: "white",
          borderRadius: "10px",
        }}
      >
        <div className="d-flex justify-content-between p-2 mb-3">
          <div className="w-25">
            <Input placeholder="Search by order ID..." />
          </div>
          <div className="w-50 d-flex align-items-end justify-content-end">
            <Button
              className="mx-2"
              style={{
                backgroundColor: "white",
                color: "black",
                borderColor: "#D9D9D9",
              }}
            >
              Sort{" "}
              <svg
                width="14"
                height="12"
                viewBox="0 0 14 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0.623006 7.93375C0.831286 7.72547 1.16897 7.72547 1.37725 7.93375L3.641 10.1975L5.90474 7.93375C6.11302 7.72547 6.45071 7.72547 6.65899 7.93375C6.86727 8.14203 6.86727 8.47972 6.65899 8.688L4.01812 11.3289C3.80984 11.5371 3.47215 11.5371 3.26387 11.3289L0.623006 8.688C0.414727 8.47972 0.414727 8.14203 0.623006 7.93375Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M3.64095 0.515153C3.9355 0.515153 4.17428 0.753934 4.17428 1.04849L4.17428 10.9517C4.17428 11.2463 3.9355 11.4851 3.64095 11.4851C3.3464 11.4851 3.10762 11.2463 3.10762 10.9517L3.10762 1.04849C3.10762 0.753934 3.3464 0.515153 3.64095 0.515153Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.3772 4.06646C13.169 4.27474 12.8313 4.27474 12.623 4.06646L10.3592 1.80272L8.0955 4.06646C7.88722 4.27474 7.54953 4.27474 7.34126 4.06646C7.13298 3.85818 7.13298 3.52049 7.34126 3.31221L9.98212 0.671346C10.1904 0.463067 10.5281 0.463067 10.7364 0.671346L13.3772 3.31221C13.5855 3.52049 13.5855 3.85818 13.3772 4.06646Z"
                  fill="#4D4D4D"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M10.3593 11.4851C10.0647 11.4851 9.82596 11.2463 9.82596 10.9517L9.82596 1.04847C9.82596 0.753922 10.0647 0.515141 10.3593 0.515141C10.6538 0.515142 10.8926 0.753922 10.8926 1.04847L10.8926 10.9517C10.8926 11.2463 10.6538 11.4851 10.3593 11.4851Z"
                  fill="#4D4D4D"
                />
              </svg>
            </Button>
            <Button
              className="mx-2"
              style={{ backgroundColor: "white", borderColor: "#D9D9D9" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.9993 10.9414C17.371 10.9414 17.6811 11.2102 17.7435 11.5968L17.75 11.7L17.7495 15.2321C17.7495 16.5585 16.7164 17.655 15.3813 17.7448L15.2153 17.75L2.77794 17.7499C1.44615 17.7499 0.345286 16.7208 0.255253 15.391L0.25 15.2258V11.6863C0.25 11.2749 0.585964 10.9414 1.00027 10.9414C1.37194 10.9414 1.68197 11.2102 1.74442 11.5968L1.75092 11.7L1.75044 15.2321C1.75044 15.7555 2.14596 16.2013 2.65248 16.2534L2.76695 16.2599L15.2217 16.2602C15.7449 16.2602 16.1902 15.8642 16.2423 15.3577L16.2489 15.2429L16.2492 11.6863C16.2492 11.2749 16.585 10.9414 16.9993 10.9414ZM9.01207 0.25C9.37148 0.250378 9.68151 0.519212 9.74396 0.905762L9.75046 1.00892L9.75124 9.8297L12.9124 6.67494C13.1433 6.44469 13.4923 6.39342 13.7961 6.54761L13.9083 6.61495L13.9846 6.68297C14.2334 6.92976 14.2646 7.33058 14.0409 7.65049L13.9652 7.73721L9.51424 12.1745L9.43271 12.2409L9.32712 12.3035L9.23677 12.3399L9.15501 12.3617L9.07541 12.374L9.01331 12.3765L8.89007 12.3697L8.78548 12.3471L8.70291 12.3166L8.6007 12.2643L8.54241 12.2224L8.4569 12.1479L4.02399 7.726C3.73169 7.43447 3.73275 6.96287 4.02636 6.67264C4.28648 6.41551 4.69029 6.38633 5.01149 6.60986L5.09848 6.68534L8.25064 9.82956L8.24964 0.995196C8.24964 0.618676 8.53272 0.302507 8.90546 0.256191L9.01207 0.25Z"
                  fill="#4D4D4D"
                />
              </svg>
            </Button>
          </div>
        </div>
        <div className="p-2 mb-3">
          <Table>
            <thead>
              <tr
                style={{ borderRadius: "30px", border: "1px solid #F2F2F2" }}
                className="table-secondary"
              >
                <td style={{ color: "#4D4D4D", fontWeight: "bold" }}>
                  Order ID
                </td>
                <td style={{ color: "#4D4D4D", fontWeight: "bold" }}>
                  Order date{" "}
                  <svg
                    width="8"
                    height="6"
                    viewBox="0 0 8 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3.43025 5.23409L0.606918 1.3286C0.548707 1.24507 0.517907 1.15037 0.517581 1.05392C0.517255 0.957461 0.547415 0.862617 0.60506 0.778818C0.662705 0.69502 0.745826 0.625189 0.846154 0.576272C0.946481 0.527357 1.06052 0.50106 1.17692 0.5H6.82358C6.93998 0.50106 7.05402 0.527357 7.15435 0.576272C7.25468 0.625189 7.3378 0.69502 7.39544 0.778818C7.45309 0.862617 7.48325 0.957461 7.48292 1.05392C7.4826 1.15037 7.45179 1.24507 7.39358 1.3286L4.57025 5.23409C4.51083 5.31526 4.42716 5.38238 4.32732 5.42895C4.22747 5.47553 4.11483 5.5 4.00025 5.5C3.88567 5.5 3.77303 5.47553 3.67319 5.42895C3.57334 5.38238 3.48967 5.31526 3.43025 5.23409Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </td>
                <td style={{ color: "#4D4D4D", fontWeight: "bold" }}>
                  Order amount
                </td>
                <td style={{ color: "#4D4D4D", fontWeight: "bold" }}>
                  Transaction fees
                </td>
              </tr>
            </thead>
            <tbody>
              {OrderData.length &&
                OrderData.map((item) => (
                  <tr key={item.orderID}>
                    <td scope="row" style={{ color: "#146EB4" }}>
                      {item.orderID}
                    </td>
                    <td>{item.orderDate}</td>
                    <td>₹ {item.orderAmt}</td>
                    <td>₹ {item.transactionFees}</td>
                  </tr>
                ))}
            </tbody>
          </Table>
          <div className="mt-4 d-flex justify-content-center align-items-center">
            <Pagination>
              <PaginationItem>
                <PaginationLink style={{ color: "black" }} href="#">
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M5.78033 0.96967C5.48744 0.676777 5.01256 0.676777 4.71967 0.96967L0.21967 5.46967C0.0790172 5.61032 -9.53674e-07 5.80109 -9.53674e-07 6C-9.53674e-07 6.19891 0.0790172 6.38968 0.21967 6.53033L4.71967 11.0303C5.01256 11.3232 5.48744 11.3232 5.78033 11.0303C6.07322 10.7374 6.07322 10.2626 5.78033 9.96967L1.81066 6L5.78033 2.03033C6.07322 1.73744 6.07322 1.26256 5.78033 0.96967Z"
                      fill="#4D4D4D"
                    />
                  </svg>{" "}
                  Previous
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  style={{ color: "black" }}
                  className={style.borderRemove}
                  href="#"
                >
                  1
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  style={{ color: "black" }}
                  className={style.borderRemove}
                  href="#"
                >
                  2
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  style={{ color: "black" }}
                  className={style.borderRemove}
                  href="#"
                >
                  3
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  style={{ color: "black" }}
                  className={style.borderRemove}
                  href="#"
                >
                  4
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink
                  style={{ color: "black" }}
                  className={style.borderRemove}
                  href="#"
                >
                  5
                </PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationLink style={{ color: "black" }} href="#">
                  Next{" "}
                  <svg
                    width="6"
                    height="12"
                    viewBox="0 0 6 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M0.21967 0.96967C0.512563 0.676777 0.987437 0.676777 1.28033 0.96967L5.78033 5.46967C5.92098 5.61032 6 5.80109 6 6C6 6.19891 5.92098 6.38968 5.78033 6.53033L1.28033 11.0303C0.987437 11.3232 0.512564 11.3232 0.21967 11.0303C-0.0732229 10.7374 -0.0732229 10.2626 0.21967 9.96967L4.18934 6L0.21967 2.03033C-0.0732233 1.73744 -0.0732233 1.26256 0.21967 0.96967Z"
                      fill="#4D4D4D"
                    />
                  </svg>
                </PaginationLink>
              </PaginationItem>
            </Pagination>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MainBody;
