import { Dropdown, MenuProps } from "antd";

export default function FilterAction() {
 const sortItems = [{ id: 1, items: ["Recently Accessed ", "Recently Entrolled", "Title:A-to-Z", "Title:Z-to-A"] }]
 return (
  <div>
   <div>
    {sortItems &&
     sortItems.map((e, i) => {
      const menuItems: MenuProps['items'] = e.items.map(item => ({ label: item, key: item }));
      return (
       <>
        <p>Sort by</p>
       <Dropdown key={e.id} menu={{ items: menuItems }} placement="bottomLeft">
        <button className="border border-purple-600 text-purple-600 p-2 rounded-sm hover:bg-purple-300 text-sm font-bold">{menuItems[0]?.key || "Choose"}</button>
       </Dropdown>
       </>
      );
     })}
    {

    }
   </div>
  </div>
 )
}