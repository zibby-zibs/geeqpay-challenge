export interface Order {
  id: number;
  fullName: string;
  date: string;
  avatarUrl: string;
  status: "Paid" | "Refund";
  amount: number;
  itemsPurchased: ItemPurchased[];
}

type ItemPurchased = {
  itemId: number;
  itemName: string;
  quantity: number;
  amountPerItem: number;
};
export const orders = [
  {
    id: 1,
    fullName: "Alice Johnson",
    date: "2023-01-15T08:30:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=70",
    status: "Paid",
    amount: 49.99,
    itemsPurchased: [
      { itemId: 101, itemName: "Product A", quantity: 2, amountPerItem: 20.0 },
      { itemId: 102, itemName: "Product B", quantity: 1, amountPerItem: 29.99 },
    ],
  },
  {
    id: 2,
    fullName: "Bob Smith",
    date: "2023-02-22T14:45:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=68",
    status: "Refund",
    amount: 79.95,
    itemsPurchased: [
      { itemId: 201, itemName: "Product C", quantity: 3, amountPerItem: 26.65 },
    ],
  },
  {
    id: 3,
    fullName: "Charlie Davis",
    date: "2023-03-10T18:20:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=67",
    status: "Paid",
    amount: 29.99,
    itemsPurchased: [
      { itemId: 301, itemName: "Product D", quantity: 4, amountPerItem: 7.5 },
      { itemId: 302, itemName: "Product E", quantity: 2, amountPerItem: 11.99 },
    ],
  },
  {
    id: 4,
    fullName: "Grace Wilson",
    date: "2023-04-05T12:15:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=46",
    status: "Paid",
    amount: 99.99,
    itemsPurchased: [
      { itemId: 401, itemName: "Product F", quantity: 1, amountPerItem: 99.99 },
    ],
  },
  {
    id: 5,
    fullName: "Eva Martinez",
    date: "2023-05-20T09:05:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=43",
    status: "Refund",
    amount: 59.95,
    itemsPurchased: [
      { itemId: 501, itemName: "Product G", quantity: 2, amountPerItem: 29.97 },
      { itemId: 502, itemName: "Product H", quantity: 1, amountPerItem: 29.98 },
    ],
  },
  {
    id: 6,
    fullName: "Frank Harris",
    date: "2023-06-18T16:40:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=33",
    status: "Paid",
    amount: 39.99,
    itemsPurchased: [
      { itemId: 601, itemName: "Product I", quantity: 3, amountPerItem: 13.33 },
    ],
  },
  {
    id: 7,
    fullName: "Grace Miller",
    date: "2023-07-30T20:10:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=31",
    status: "Paid",
    amount: 89.95,
    itemsPurchased: [
      { itemId: 701, itemName: "Product J", quantity: 2, amountPerItem: 44.97 },
      { itemId: 702, itemName: "Product K", quantity: 1, amountPerItem: 44.98 },
    ],
  },
  {
    id: 8,
    fullName: "Henry Taylor",
    date: "2023-08-14T10:55:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=13",
    status: "Refund",
    amount: 49.99,
    itemsPurchased: [
      { itemId: 801, itemName: "Product L", quantity: 4, amountPerItem: 12.5 },
      { itemId: 802, itemName: "Product M", quantity: 1, amountPerItem: 37.49 },
    ],
  },
  {
    id: 9,
    fullName: "Ivy Thompson",
    date: "2023-09-25T15:25:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    status: "Paid",
    amount: 69.95,
    itemsPurchased: [
      { itemId: 901, itemName: "Product N", quantity: 2, amountPerItem: 34.97 },
      { itemId: 902, itemName: "Product O", quantity: 1, amountPerItem: 34.98 },
    ],
  },
  {
    id: 10,
    fullName: "Jack Turner",
    date: "2023-10-12T11:50:00Z",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    status: "Paid",
    amount: 79.99,
    itemsPurchased: [
      {
        itemId: 1001,
        itemName: "Product P",
        quantity: 3,
        amountPerItem: 26.66,
      },
    ],
  },
];
