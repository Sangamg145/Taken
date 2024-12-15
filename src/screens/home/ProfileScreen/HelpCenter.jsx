import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const faqs = [
  {
    id: '1',
    question: 'How do I reset my password?',
    answer:
      'To reset your password, go to Settings > Account > Reset Password.',
  },
  {
    id: '2',
    question: 'How can I contact support?',
    answer:
      'You can contact support via email at support@example.com or through the Contact Support button.',
  },
  {
    id: '3',
    question: 'How do I update my profile information?',
    answer: 'Navigate to Profile > Edit Profile to update your information.',
  },
];

const HelpCenterScreen = () => {
  const [searchText, setSearchText] = useState('');
  const [expandedFAQ, setExpandedFAQ] = useState();

  const filteredFAQs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchText.toLowerCase()),
  );

  const renderFAQItem = ({item}) => (
    <TouchableOpacity
      style={styles.faqCard}
      onPress={() => setExpandedFAQ(expandedFAQ === item.id ? null : item.id)}>
      <View style={styles.faqHeader}>
        <Text style={styles.faqQuestion}>{item.question}</Text>
        <Icon
          name={expandedFAQ === item.id ? 'chevron-up' : 'chevron-down'}
          size={20}
          color="#666"
        />
      </View>
      {expandedFAQ === item.id && (
        <Text style={styles.faqAnswer}>{item.answer}</Text>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Help Center</Text>
        <TouchableOpacity style={styles.contactButton}>
          <Text style={styles.contactButtonText}>Contact Support</Text>
        </TouchableOpacity>
      </View>

      {/* Search Bar */}
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Search for help..."
          value={searchText}
          onChangeText={setSearchText}
        />
      </View>

      {/* FAQ Section */}
      <FlatList
        data={filteredFAQs}
        keyExtractor={item => item.id}
        renderItem={renderFAQItem}
        contentContainerStyle={styles.faqContainer}
        ListEmptyComponent={
          <Text style={styles.noResultsText}>
            No FAQs found for "{searchText}"
          </Text>
        }
      />

      {/* Contact Support Section */}
      <View style={styles.contactSupport}>
        <Text style={styles.contactSupportText}>Need further assistance?</Text>
        <TouchableOpacity style={styles.chatButton}>
          <Text style={styles.chatButtonText}>Start Chat</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4CAF50',
  },
  headerTitle: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  contactButton: {
    backgroundColor: '#fff',
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  contactButtonText: {
    color: '#4CAF50',
    fontSize: 14,
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    margin: 15,
    borderRadius: 8,
    backgroundColor: '#fff',
    elevation: 3,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  faqContainer: {
    paddingHorizontal: 15,
  },
  faqCard: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    elevation: 2,
  },
  faqHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  faqQuestion: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  faqAnswer: {
    marginTop: 10,
    fontSize: 14,
    color: '#666',
  },
  noResultsText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#999',
    marginTop: 20,
  },
  contactSupport: {
    padding: 20,
    backgroundColor: '#4CAF50',
    alignItems: 'center',
  },
  contactSupportText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 10,
  },
  chatButton: {
    backgroundColor: '#fff',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 20,
  },
  chatButtonText: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HelpCenterScreen;
