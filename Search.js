import { useState } from "react";
import { View } from "react-native";
import { TextInput, Button, Text, IconButton } from "react-native-paper";

export default function Search() {

    const [productType, setProductType] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = () => {
        setLoading(true);
    }

    return (
        <View style={styles.container}>
            <TextInput
                style={{ width: '80%', marginBottom: 10 }}
                label="Type in a product"
                mode="outlined"
                value={productType}
                onChangeText={text => setProductType(text)}
            />
            <Button
                loading={loading}
                mode="outlined"
                icon="search-web"
                onPress={handleSearch}>
                Search
            </Button>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 40,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});