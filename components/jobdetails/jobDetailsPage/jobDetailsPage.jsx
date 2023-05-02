import {useCallback, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from 'react-native';
import Company from '../company/Company'
import JobAbout from '../about/About'
import JobFooter from '../footer/Footer'
import JobTabs from '../tabs/Tabs'
import ScreenHeaderBtn from '../../common/header/ScreenHeaderBtn'
import Specifics from '../specifics/Specifics'
import {COLORS, icons, SIZES} from '../../../constants';
import useFetch from '../../../hook/useFetch';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
const tabs = ['About', 'Qualifications', 'Responsibilities'];

const JobDetailsPage = ({ route ,navigation }) => {
  const { jobId } = route.params;

  const {data, isLoading, error, refetch} = useFetch('job-details', {
    job_id: jobId,
  });

  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  const displayTabContent = () => {
    switch (activeTab) {
      case 'Qualifications':
        return (
          <Specifics
            title="Qualifications"
            points={data[0].job_highlights?.Qualifications ?? ['N/A']}
          />
        );

      case 'About':
        return (
          <JobAbout info={data[0].job_description ?? 'No data provided'} />
        );

      case 'Responsibilities':
        return (
          <Specifics
            title="Responsibilities"
            points={data[0].job_highlights?.Responsibilities ?? ['N/A']}
          />
        );

      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.lightWhite}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={{padding: SIZES.medium, paddingBottom: 100}}>
              <Company
                companyLogo={data[0].employer_logo}
                jobTitle={data[0].job_title}
                companyName={data[0].employer_name}
                location={data[0].job_country}
              />

              <JobTabs
                tabs={tabs}
                activeTab={activeTab}
                setActiveTab={setActiveTab}
              />

              {displayTabContent()}
            </View>
          )}
        </ScrollView>

        <JobFooter
          url={
            data[0]?.job_google_link ??
            'https://careers.google.com/jobs/results/'
          }
        />
    </SafeAreaView>
  );
};

export default JobDetailsPage;
