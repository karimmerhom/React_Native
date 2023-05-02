import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, FlatList, ScrollView } from 'react-native'
import styles from './homePage.style'
import {icons, SIZES} from '../../../constants'
import PopularJobs from '../popular/Popularjobs'
import NearByJobs from '../nearby/Nearbyjobs'



const HomePage = ({ navigation }) => {
  const jobTypes = ["Full-time", "Part-time", "Contractor"];
  const [activeJobType, setActiveJobType] = useState("Full-time");

  return (
    <ScrollView>
     <View  style={styles.container}>
      <Text style={styles.userName}>Hello Adrian</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>
    </View>
    
    <View  style={styles.searchContainer}>
      <View  style={styles.searchWrapper}>
      <TextInput
            style={styles.searchInput}
            value={""}
            //onChangeText={""}
            placeholder='What are you looking for?'
          />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={""}>
          <Image
            source={icons.search}
            resizeMode='contain'
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
    </View>
    <View style={styles.tabsContainer}>
        <FlatList
          data={jobTypes}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item);
              }}
            >
              <Text style={styles.tabText(activeJobType, item)}>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={(item) => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
           horizontal
        />
      </View>
      <PopularJobs navigation={navigation}/>
      <NearByJobs  navigation={navigation}/>
    </ScrollView>
  )
}
export default HomePage