import React, { useState } from "react";
// import paypal from "@paypal/checkout-server-sdk";
import { PayPalButton } from "react-paypal-button-v2";
import { useDispatch, useSelector } from "react-redux";
import { removeAllItems } from "../redux/action/itemAction";
import jsPDF from "jspdf";
import "jspdf-autotable";

const PaypalButton = ({ clientId, amount, onSuccess, onError, onCancel }) => {
  const [success, setSuccess] = useState();
  const items = useSelector((state) => state?.item.itemsList);
  const pdfFile = () => {
    const doc = new jsPDF();
    let yPos = 10;

    items.forEach((item, index) => {
      doc.text("Purchase Slip", 10, yPos);
      yPos += 10;
      doc.autoTable({
        startY: yPos,
        head: [
          [
            "Product Name",
            "Product Price",
            "Product Quantity",
            "Product Description",
            "Product Category",
            "Total",
          ],
        ],
        body: [
          [
            item.productName,
            item.productPrice,
            item.productQuanitity,
            item.productDescription,
            item.catagory,
            item.productPrice * item.productQuanitity,
          ],
        ],
      });
      doc.addPage();

      if (index === item.length - 1) {
        doc.text(`Grand total:${item.productPrice}`);
      } else {
        yPos = 10;
      }
    });
    doc.save("electroStore.pdf");
  };

  const dispatch = useDispatch();
  const onApprove = (data, actions) => {
    actions.order.capture().then((details) => {
      setSuccess(details.status);
      if (details.status === "COMPLETED") {
        pdfFile();
        setTimeout(() => {
          dispatch(removeAllItems());
        }, 1000);
      }
    });
  };

  const aa = amount?.toString().slice(0, 4);

  return (
    <div>
      {items?.length ? (
        <div>
          <PayPalButton
            amount={aa}
            clientId={clientId}
            onSuccess={onSuccess}
            onError={onError}
            onCancel={onCancel}
            onApprove={onApprove}
          />
        </div>
      ) : null}

      <div
        style={{ fontSize: "24px", textAlign: "center", color: "whitesmoke" }}
      >
        {success}
      </div>
    </div>
  );
};

export default PaypalButton;
