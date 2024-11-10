import { Document, Page, Text, View, StyleSheet, PDFDownloadLink } from '@react-pdf/renderer';

const styles = StyleSheet.create({
    page: {
        backgroundColor: '#f0f4ff',
        padding: 20,
    },
    header: {
        fontSize: 24,
        textAlign: 'center',
        color: '#3b82f6',
        marginBottom: 10,
    },
    section: {
        marginBottom: 10,
        padding: 10,
        backgroundColor: '#e0ebff',
        borderRadius: 8,
    },
    fieldTitle: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold',
        marginBottom: 4,
    },
    fieldContent: {
        fontSize: 12,
        color: '#555',
    },
});

const ResumePDF = ({ formData }) => (
    <Document>
        <Page style={styles.page}>
            <Text style={styles.header}>Resume</Text>
            {Object.entries(formData).map(([key, value]) => (
                <View key={key} style={styles.section}>
                    <Text style={styles.fieldTitle}>{key.charAt(0).toUpperCase() + key.slice(1)}:</Text>
                    <Text style={styles.fieldContent}>{value || 'Not Provided'}</Text>
                </View>
            ))}
        </Page>
    </Document>
);

const DownloadButton = ({ formData }) => (
    <PDFDownloadLink document={<ResumePDF formData={formData} />} fileName="resume.pdf">
        {({ loading }) =>
            loading ? 'Loading PDF...' : 'Download Resume'
        }
    </PDFDownloadLink>
);

export default function ResumePDFWrapper({ formData }) {
    return (
        <div className="text-center mt-4">
            <DownloadButton formData={formData} />
        </div>
    );
}
