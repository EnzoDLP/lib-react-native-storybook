import React from 'react';
import { Text, View, Pressable } from 'react-native';
import IconCircleAddOutline from '../Icons/IconCircleAddOutline.component';
import ProgressBar from '../ProgressBar/ProgressBar.component';
import IconFileTextOutline from '../Icons/IconFileTextOutline.component';
import IconCircleDeleteSolid from '../Icons/IconCircleDeleteSolid.component';
import IconFileCheckSolid from '../Icons/IconFileCheckSolid.component';
import IconEyesOutline from '../Icons/IconEyesOutline.component';

interface UploadButtonProps {
  onPress: () => void;
  title: string;
  subTitle: string;
  error?: {
    title: string;
    subTitle: string;
  };
  loading?: {
    title: string;
    onStop: () => void;
  };
  loaded?: {
    title: string;
    size: string;
    onDelete: () => void;
    onCheck: () => void;
  };
}

export const UploadButton = ({
  onPress,
  title,
  subTitle,
  error,
  loading,
  loaded,
}: UploadButtonProps) => {
  if (loaded) {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: '#686767',
          borderStyle: 'solid',
          width: 325,
        }}
      >
        <View>
          <IconFileCheckSolid />
        </View>
        <View style={{ gap: 6, flex: 1 }}>
          <Text
            style={{
              color: '#0F0F0F',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 20,
            }}
          >
            {loaded.title}
          </Text>
          <Text style={{ color: '#0F0F0F', fontSize: 12, fontWeight: 400 }}>
            {loaded.size}
          </Text>
        </View>
        <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
          <Pressable
            onPress={loaded.onCheck}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          >
            <IconEyesOutline />
          </Pressable>
          <Pressable
            onPress={loaded.onDelete}
            hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
          >
            <IconCircleDeleteSolid />
          </Pressable>
        </View>
      </View>
    );
  }

  if (loading) {
    return (
      <View
        style={{
          padding: 15,
          backgroundColor: '#FFFFFF',
          borderRadius: 5,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: '#686767',
          borderStyle: 'solid',
          width: 325,
        }}
      >
        <View style={{ opacity: 0.4 }}>
          <IconFileTextOutline />
        </View>
        <View style={{ flex: 1 }}>
          <Text
            style={{
              color: '#0F0F0F',
              opacity: 0.4,
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 20,
            }}
          >
            {loading.title}
          </Text>
          <View style={{ gap: 15, alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <ProgressBar progress={10} />
            </View>
            <Pressable
              onPress={loading.onStop}
              hitSlop={{ top: 5, bottom: 5, left: 5, right: 5 }}
            >
              <IconCircleDeleteSolid />
            </Pressable>
          </View>
        </View>
      </View>
    );
  }

  return (
    <View style={{ gap: 10, alignSelf: 'flex-start' }}>
      <Pressable
        style={{
          padding: 15,
          backgroundColor: '#E6F3EE',
          borderRadius: 5,
          alignSelf: 'flex-start',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 15,
          borderWidth: 1,
          borderColor: '#008859',
          borderStyle: 'dashed',
          width: 325,
        }}
        onPress={onPress}
      >
        <IconCircleAddOutline />
        <View style={{ gap: 6, flex: 1 }}>
          <Text
            style={{
              color: '#0F0F0F',
              fontSize: 14,
              fontWeight: 700,
              lineHeight: 20,
            }}
          >
            {title}
          </Text>
          <Text style={{ color: '#000000', fontSize: 12, fontWeight: 300 }}>
            {subTitle}
          </Text>
        </View>
      </Pressable>
      {error && (
        <View style={{ width: 325 }}>
          <Text
            style={{
              color: '#D21E1E',
              fontSize: 14,
              fontWeight: 600,
              lineHeight: 20,
            }}
          >
            {error.title}
          </Text>
          <Text
            style={{
              color: '#D21E1E',
              fontSize: 12,
              fontWeight: 400,
              lineHeight: 20,
            }}
          >
            {error.subTitle}
          </Text>
        </View>
      )}
    </View>
  );
};

export default UploadButton;
