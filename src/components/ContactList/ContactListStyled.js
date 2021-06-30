import styled from "styled-components";

export const ContactListWrapper = styled.div`
  .contactListItem {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
  }
  .contactListItem::before {
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: black;
    margin-right: 10px;
  }
  .contactListText {
    margin-right: 10px;
  }
`;
