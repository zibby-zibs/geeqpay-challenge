import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { Order, orders } from "../../../data/orders";
import { cn } from "../../lib/utils";
import dayjs from "dayjs";
import { Dialog, DialogTrigger, DialogContent } from "../ui/dialog";
import { Invoice } from ".";

const OrderTable = () => {
  return (
    <main className="w-full overflow-hidden  border border-border rounded-[0.875rem] bg-white dark:bg-[#282b2b] dark:text-white h-[23.375rem] max-h-[23.375rem overflow-y-aut p-5">
      <div className="flex items-center justify-between w-full">
        <h1 className="text-[18px] font-semibold">Orders</h1>
        <p className="text-[#34CAA5]">See All</p>
      </div>
      <Table className="h-full !max-h-[calc(300px)] overflow-y-auto">
        <TableHeader className="sticky top-0">
          <TableRow>
            <TableHead className="">Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead className="">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell className="font-medium flex items-center gap-3">
                <img
                  src={order.avatarUrl}
                  alt=""
                  className="h-8 w-8 rounded-full object-contain"
                />
                {order.fullName}
              </TableCell>
              <TableCell className="text-gray-400">
                {dayjs(order?.date).format("MMM D, YYYY")}
              </TableCell>
              <TableCell>{order.amount}</TableCell>
              <TableCell
                className={cn(
                  "text-base",
                  order?.status === "Paid" ? "text-[#34CAA5]" : "text-[#ed544e]"
                )}
              >
                <Dialog>
                  <DialogTrigger>{order?.status}</DialogTrigger>
                  <DialogContent className="w-fit p-0">
                    <Invoice order={order as Order} />
                  </DialogContent>
                </Dialog>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </main>
  );
};

export default OrderTable;
