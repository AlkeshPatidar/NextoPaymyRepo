// SuccessModal.js
import React from 'react';
import { Modal, View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { App_Primary_color } from '../../common/Colors/colors';

const SuccessModal = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
    >
      <View style={styles.overlay}>
        <View style={styles.modalBox}>

          {/* Tick Icon */}
          <Icon name="check-circle" size={70} color="#28a745" />

          {/* Message */}
          <Text style={styles.title}>Your booking successful</Text>

          {/* Button */}
          <TouchableOpacity style={styles.button} onPress={onClose}>
            <Text style={styles.buttonText}>Back to Home</Text>
          </TouchableOpacity>

        </View>
      </View>
    </Modal>
  );
};

export default SuccessModal;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBox: {
    width: '80%',
    backgroundColor: '#fff',
    padding: 25,
    borderRadius: 15,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    marginTop: 15,
    marginBottom: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    backgroundColor:App_Primary_color,
    width: '70%',
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
  },
});
