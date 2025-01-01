import { FlatList, Text } from "react-native";

function renderExponseItem(itemData){
  return <Text>{itemData.item.description}</Text>
}
function ExpensesList({expenses}){
  return <FlatList data={expenses} renderItem={renderExponseItem}  keyExtractor={(item) => item.id} />
}

export default ExpensesList;