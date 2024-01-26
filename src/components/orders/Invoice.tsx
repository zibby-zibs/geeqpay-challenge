import { useRef } from "react";
import { Order } from "../../../data/orders";
import dayjs from "dayjs";
import { MdOutlineFileDownload } from "react-icons/md";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

type Props = {
  order: Order;
};
const Invoice = ({ order }: Props) => {
  const invoiceRef = useRef<HTMLDivElement>(null);

  function generateRandomNumber(): string {
    const alphanumeric =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < 12; i++) {
      result += alphanumeric.charAt(
        Math.floor(Math.random() * alphanumeric.length)
      );
    }
    return result.slice(0, 8) + "-" + result.slice(8);
  }

  function generateCard(): string {
    let result = "";
    for (let i = 0; i < 4; i++) {
      result += Math.floor(Math.random() * 10);
    }
    return result;
  }

  const downloadPdf = () => {
    const input = invoiceRef.current;
    if (input) {
      html2canvas(input, { scale: 3 }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF("p", "mm", "a4"); // A4 size page of PDF
        const imgProps = pdf.getImageProperties(imgData);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
        pdf.addImage(imgData, "PNG", 0, 0, pdfWidth, pdfHeight);
        pdf.save("invoice.pdf");
      });
    }
  };

  return (
    <main className="flex gap-3 py-11 dark:text-white" ref={invoiceRef}>
      <figure className="flex flex-col gap-5 items-center border-r border-border px-3">
        <img src="/logo.svg" alt="" className="w-8 h-8 object-contain" />
        <button onClick={downloadPdf}>
          <MdOutlineFileDownload size={24} />
        </button>
      </figure>
      <aside className="px-3 pr-6">
        <section>
          <article className="capitalize text-[18px] text-center">
            {order?.status === "Refund" ? (
              <h1>You have a pending refund</h1>
            ) : (
              <h1>Thank you for your purchase!</h1>
            )}
            <hr className="bg-primary dark:bg-[#34CAA5] w-[260px] h-[2px] mx-auto rounded-full mt-2 " />
          </article>
          <div className="max-w-[300px] mx-auto bg-primary-foreground rounded-md p-3 mt-5 flex flex-col gap-4">
            <div className="flex justify-between w-full text-sm">
              <p>Invoice Number</p>
              <p className="font-semibold">#{generateRandomNumber()}</p>
            </div>
            {order.status === "Refund" && (
              <div className="flex justify-between w-full text-sm">
                <p>To</p>
                <p className="font-semibold">{order.fullName}</p>
              </div>
            )}
            <div className="flex justify-between w-full text-sm">
              <p>Payment Date</p>
              <p className="font-semibold">
                {dayjs(order.date).format("MMM D, YYYY")}
              </p>
            </div>
            <div className="flex justify-between w-full text-sm">
              <p>Payment Card</p>
              <p className="font-semibold">****{generateCard()}</p>
            </div>
          </div>
        </section>
        <section className="mt-3">
          <h1 className="text-base">Purchases</h1>
          <div className="flex justify-between items-center text-gray-400 mt-3 text-sm font-semibold">
            <h1>Name</h1>
            <h1>Quantity</h1>
            <h1>Amount</h1>
          </div>
          <aside>
            {order.itemsPurchased.map((item) => {
              return (
                <div
                  key={item.itemId}
                  className="flex justify-between items-center text-sm py-2 border-b border-border"
                >
                  <p>{item.itemName}</p>
                  <p className="text-center">{item.quantity}</p>
                  <p>${item.amountPerItem}</p>
                </div>
              );
            })}
            <div className="flex justify-between text-sm mt-2 dark:text-[#34CAA5]">
              <p>Total</p>
              <p className="font-semibold">${order.amount}</p>
            </div>
          </aside>
        </section>
      </aside>
    </main>
  );
};

export default Invoice;
