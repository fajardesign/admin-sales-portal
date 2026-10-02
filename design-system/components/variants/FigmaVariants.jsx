import React from 'react';
import { Button } from '../actions/Button.jsx';
import { Icon } from '../icons/Icon.jsx';
import { Badge } from '../display/Badge.jsx';
import { Alert } from '../feedback/Alert.jsx';
import { LinkButton } from '../actions/LinkButton.jsx';
import { SocialButton } from '../actions/SocialButton.jsx';
import { ContentDivider } from '../display/ContentDivider.jsx';
import { Tag } from '../display/Tag.jsx';
import { RadioCard } from '../forms/CheckboxCard.jsx';
import { ScrollArea } from '../navigation/HorizontalFilter.jsx';
import { Sidebar } from '../navigation/Sidebar.jsx';
import { Select } from '../forms/Select.jsx';
import { StatusBadge } from '../display/Badge.jsx';
import { BottomSheetHeader } from '../feedback/BottomSheet.jsx';

// Generated: one export per Figma variant-symbol (pre-set props on the hand-authored components).

/** Figma: "Buttons [1.1]/Neutral/Filled/Default/2X-Small (28)/Off" */
export const Buttons11NeutralFilledDefault2XSmall28Off = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Badge [1.1]/📂 Basic/💜 Purple/Small (16)/Off/Off" */
export const Badge11BasicPurpleSmall16OffOff = (p = {}) => <Badge color="purple" size="sm" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/2X-Small (28)/On" */
export const Buttons11NeutralStrokeDefault2XSmall28On = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Alert & Notification & Toast [1.1]/🆘 Error/X-Small (32)" */
export const AlertNotificationToast11ErrorXSmall32 = (p = {}) => <Alert status="error" size="sm" title={p.title ?? 'Insert your alert title here!'} {...p}>{p.children}</Alert>;
/** Figma: "Link Buttons [1.1]/Modifiable/Default/Medium (20)/Off" */
export const LinkButtons11ModifiableDefaultMedium20Off = (p = {}) => <LinkButton tone="black" size="md" {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Alert & Notification & Toast [1.1]/❇️ Success/Small (36)" */
export const AlertNotificationToast11SuccessSmall36 = (p = {}) => <Alert status="success" size="sm" title={p.title ?? 'Insert your alert title here!'} {...p}>{p.children}</Alert>;
/** Figma: "Alert & Notification & Toast [1.1]/🚀 Feature/Large" */
export const AlertNotificationToast11FeatureLarge = (p = {}) => <Alert status="feature" size="lg" title={p.title ?? 'Insert your alert title here!'} {...p}>{p.children}</Alert>;
/** Figma: "Alert & Notification & Toast [1.1]/🆘 Error/Large" */
export const AlertNotificationToast11ErrorLarge = (p = {}) => <Alert status="error" size="lg" title={p.title ?? 'Insert your alert title here!'} {...p}>{p.children}</Alert>;
/** Figma: "Buttons [1.1]/Lighter/Default/Medium (40)/Off" */
export const Buttons11LighterDefaultMedium40Off = (p = {}) => <Button tone="primary" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Social Buttons [1.1]/Facebook/Stroke/Default/Off" */
export const SocialButtons11FacebookStrokeDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Facebook'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Dropbox/Filled/Default/Off" */
export const SocialButtons11DropboxFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Dropbox'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Facebook/Filled/Default/Off" */
export const SocialButtons11FacebookFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Facebook'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Linkedin/Filled/Default/Off" */
export const SocialButtons11LinkedinFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Linkedin'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Github/Filled/Default/Off" */
export const SocialButtons11GithubFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Github'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Github/Stroke/Default/Off" */
export const SocialButtons11GithubStrokeDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Github'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Dropbox/Stroke/Default/Off" */
export const SocialButtons11DropboxStrokeDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Dropbox'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Linkedin/Stroke/Default/Off" */
export const SocialButtons11LinkedinStrokeDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Linkedin'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Linkedin/Stroke/Default/On" */
export const SocialButtons11LinkedinStrokeDefaultOn = (p = {}) => <SocialButton iconOnly={true} {...p}>{p.children ?? 'Continue with Linkedin'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Apple/Stroke/Default/On" */
export const SocialButtons11AppleStrokeDefaultOn = (p = {}) => <SocialButton iconOnly={true} {...p}>{p.children ?? 'Continue with Apple'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/X (Twitter)/Stroke/Default/Off" */
export const SocialButtons11XTwitterStrokeDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with X (Twitter)'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Apple/Stroke/Default/Off" */
export const SocialButtons11AppleStrokeDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Apple'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/X (Twitter)/Filled/Default/Off" */
export const SocialButtons11XTwitterFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with X (Twitter)'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Apple/Filled/Default/Off" */
export const SocialButtons11AppleFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Apple'}</SocialButton>;
/** Figma: "Social Buttons [1.1]/Google/Filled/Default/Off" */
export const SocialButtons11GoogleFilledDefaultOff = (p = {}) => <SocialButton iconOnly={false} {...p}>{p.children ?? 'Continue with Google'}</SocialButton>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/Medium (40)/Off" */
export const Buttons11NeutralGhostDefaultMedium40Off = (p = {}) => <Button tone="neutral" variant="ghost" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/Medium (40)/Off" */
export const Buttons11ErrorGhostDefaultMedium40Off = (p = {}) => <Button tone="error" variant="ghost" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/Medium (40)/Off" */
export const Buttons11NeutralLighterDefaultMedium40Off = (p = {}) => <Button tone="neutral" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/Medium (40)/Off" */
export const Buttons11ErrorLighterDefaultMedium40Off = (p = {}) => <Button tone="error" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/Medium (40)/Off" */
export const Buttons11NeutralFilledDefaultMedium40Off = (p = {}) => <Button tone="neutral" variant="filled" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Default/Medium (40)/Off" */
export const Buttons11ErrorFilledDefaultMedium40Off = (p = {}) => <Button tone="error" variant="filled" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Content Divider [1.1]/Text Button Group" */
export const ContentDivider11TextButtonGroup = (p = {}) => <ContentDivider type="text-line" {...p}>{p.children ?? 'OR'}</ContentDivider>;
/** Figma: "Content Divider [1.1]/Text Button" */
export const ContentDivider11TextButton = (p = {}) => <ContentDivider type="text-line" {...p}>{p.children ?? 'OR'}</ContentDivider>;
/** Figma: "Content Divider [1.1]/Icon Button Group" */
export const ContentDivider11IconButtonGroup = (p = {}) => <ContentDivider type="line" {...p}>{p.children ?? 'OR'}</ContentDivider>;
/** Figma: "Content Divider [1.1]/Icon Button" */
export const ContentDivider11IconButton = (p = {}) => <ContentDivider type="line" {...p}>{p.children ?? 'OR'}</ContentDivider>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/X-Small (32)/On" */
export const Buttons11NeutralStrokeDefaultXSmall32On = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Tag [1.1]/📂 Basic/Gray/On" */
export const Tag11BasicGrayOn = (p = {}) => <Tag dismissible={true} {...p}>{p.children ?? 'Tag'}</Tag>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/2X-Small (28)/Off" */
export const Buttons11NeutralStrokeHover2XSmall28Off = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Badge [1.1]/📂 Basic/💔 Red/Medium (20)/On/Off" */
export const Badge11BasicRedMedium20OnOff = (p = {}) => <Badge color="red" size="md" type="number" {...p}>{p.children ?? '8'}</Badge>;
/** Figma: "Link Buttons [1.1]/Error/Default/Medium (20)/On" */
export const LinkButtons11ErrorDefaultMedium20On = (p = {}) => <LinkButton tone="error" size="md" underline {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/X-Small (32)/Off" */
export const Buttons11ErrorStrokeDefaultXSmall32Off = (p = {}) => <Button tone="error" variant="stroke" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/Small (36)/Off" */
export const Buttons11NeutralLighterDefaultSmall36Off = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Link Buttons [1.1]/Gray/Disabled/Small (16)/Off" */
export const LinkButtons11GrayDisabledSmall16Off = (p = {}) => <LinkButton tone="gray" size="sm" disabled {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Badge [1.1]/📂 Basic/🧡 Orange/Small (16)/Off/Off" */
export const Badge11BasicOrangeSmall16OffOff = (p = {}) => <Badge color="orange" size="sm" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Radio Card [1.1]/🏢 Company/Default" */
export const RadioCard11CompanyDefault = (p = {}) => <RadioCard label="Insert your label" description="Insert a description here." {...p} />;
/** Figma: "Radio Card [1.1]/🎗️ Brand/Default" */
export const RadioCard11BrandDefault = (p = {}) => <RadioCard label="Insert your label" description="Insert a description here." {...p} />;
/** Figma: "Radio Card [1.1]/💳 Card Provider/Default" */
export const RadioCard11CardProviderDefault = (p = {}) => <RadioCard label="Insert your label" description="Insert a description here." {...p} />;
/** Figma: "Scroll [1.1]/Lighter/Medium" */
export const Scroll11LighterMedium = (p = {}) => <ScrollArea height={120} {...p}>{p.children}</ScrollArea>;
/** Figma: "Alert & Notification & Toast [1.1]/🚀 Feature/X-Small (32)" */
export const AlertNotificationToast11FeatureXSmall32 = (p = {}) => <Alert status="feature" size="sm" title={p.title ?? 'Insert your alert title here!'} {...p}>{p.children}</Alert>;
/** Figma: "Sidebar [Navigation] [1.1]/On/HR Management/Off" */
export const SidebarNavigation11OnHRManagementOff = (p = {}) => <Sidebar collapsed={true} sections={[{ title: 'Main', items: [{ label: 'Dashboard', icon: 'LayoutGridLine' }] }]} {...p} />;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/X-Small (32)/On" */
export const Buttons11NeutralGhostDisabledXSmall32On = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/Small (36)/On" */
export const Buttons11NeutralGhostDisabledSmall36On = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/Small (36)/On" */
export const Buttons11NeutralGhostDefaultSmall36On = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/Medium (40)/On" */
export const Buttons11NeutralGhostDisabledMedium40On = (p = {}) => <Button tone="neutral" variant="ghost" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Link Buttons [1.1]/Gray/Default/Small (16)/On" */
export const LinkButtons11GrayDefaultSmall16On = (p = {}) => <LinkButton tone="gray" size="sm" underline {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/X-Small (32)/Off" */
export const Buttons11NeutralStrokeDisabledXSmall32Off = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/Small (36)/Off" */
export const Buttons11NeutralStrokeDisabledSmall36Off = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Badge [1.1]/📂 Basic/💜 Purple/Medium (20)/Off/Off" */
export const Badge11BasicPurpleMedium20OffOff = (p = {}) => <Badge color="purple" size="md" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/💔 Red/Medium (20)/Off/Off" */
export const Badge11BasicRedMedium20OffOff = (p = {}) => <Badge color="red" size="md" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/🧡 Orange/Medium (20)/Off/Off" */
export const Badge11BasicOrangeMedium20OffOff = (p = {}) => <Badge color="orange" size="md" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Alert & Notification & Toast [1.1]/ℹ️ Information/X-Small (32)" */
export const AlertNotificationToast11InformationXSmall32 = (p = {}) => <Alert status="information" size="sm" title={p.title ?? 'Insert your alert title here!'} {...p}>{p.children}</Alert>;
/** Figma: "Select [1.1]/🌍 Country/Filled/Medium (40)" */
export const Select11CountryFilledMedium40 = (p = {}) => <Select options={[{ label: 'Indonesia', value: 'id' }]} defaultValue="id" {...p} />;
/** Figma: "Content Divider [1.1]/Line Spacing" */
export const ContentDivider11LineSpacing = (p = {}) => <ContentDivider type="line" {...p}>{p.children ?? 'OR'}</ContentDivider>;
/** Figma: "Buttons [1.1]/Lighter/Default/X-Small (32)/Off" */
export const Buttons11LighterDefaultXSmall32Off = (p = {}) => <Button tone="primary" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Link Buttons [1.1]/Black/Default/Small (16)/On" */
export const LinkButtons11BlackDefaultSmall16On = (p = {}) => <LinkButton tone="black" size="sm" underline {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Gray/Default/Small (16)/Off" */
export const LinkButtons11GrayDefaultSmall16Off = (p = {}) => <LinkButton tone="gray" size="sm" {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Modifiable/Default/Medium (20)/On" */
export const LinkButtons11ModifiableDefaultMedium20On = (p = {}) => <LinkButton tone="black" size="md" underline {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Error/Default/Medium (20)/Off" */
export const LinkButtons11ErrorDefaultMedium20Off = (p = {}) => <LinkButton tone="error" size="md" {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Black/Default/Medium (20)/On" */
export const LinkButtons11BlackDefaultMedium20On = (p = {}) => <LinkButton tone="black" size="md" underline {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Black/Default/Medium (20)/Off" */
export const LinkButtons11BlackDefaultMedium20Off = (p = {}) => <LinkButton tone="black" size="md" {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Gray/Default/Medium (20)/On" */
export const LinkButtons11GrayDefaultMedium20On = (p = {}) => <LinkButton tone="gray" size="md" underline {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Link Buttons [1.1]/Gray/Default/Medium (20)/Off" */
export const LinkButtons11GrayDefaultMedium20Off = (p = {}) => <LinkButton tone="gray" size="md" {...p}>{p.children ?? 'Link Button'}</LinkButton>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/2X-Small (28)/Off" */
export const Buttons11NeutralStrokeDefault2XSmall28Off = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/X-Small (32)/On" */
export const Buttons11NeutralGhostDefaultXSmall32On = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/X-Small (32)/Off" */
export const Buttons11NeutralStrokeDefaultXSmall32Off = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/Small (36)/On" */
export const Buttons11NeutralStrokeDefaultSmall36On = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/Small (36)/Off" */
export const Buttons11NeutralStrokeDefaultSmall36Off = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/Small (36)/Off" */
export const Buttons11NeutralFilledDefaultSmall36Off = (p = {}) => <Button tone="neutral" variant="filled" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/Medium (40)/On" */
export const Buttons11NeutralGhostDefaultMedium40On = (p = {}) => <Button tone="neutral" variant="ghost" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/Medium (40)/Off" */
export const Buttons11NeutralStrokeDefaultMedium40Off = (p = {}) => <Button tone="neutral" variant="stroke" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/Medium (40)/Off" */
export const Buttons11ErrorStrokeDefaultMedium40Off = (p = {}) => <Button tone="error" variant="stroke" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Badge [1.1]/📂 Basic/🩷 Pink/Medium (20)/Off/Off" */
export const Badge11BasicPinkMedium20OffOff = (p = {}) => <Badge color="pink" size="md" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/💚 Green/Medium (20)/Off/Off" */
export const Badge11BasicGreenMedium20OffOff = (p = {}) => <Badge color="green" size="md" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/💙 Blue/Medium (20)/Off/Off" */
export const Badge11BasicBlueMedium20OffOff = (p = {}) => <Badge color="blue" size="md" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/🩶 Gray/Small (16)/Off/On" */
export const Badge11BasicGraySmall16OffOn = (p = {}) => <Badge color="gray" size="sm" disabled {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/💔 Red/Small (16)/On/Off" */
export const Badge11BasicRedSmall16OnOff = (p = {}) => <Badge color="red" size="sm" type="number" {...p}>{p.children ?? '8'}</Badge>;
/** Figma: "Badge [1.1]/📂 Basic/💙 Blue/Small (16)/Off/Off" */
export const Badge11BasicBlueSmall16OffOff = (p = {}) => <Badge color="blue" size="sm" {...p}>{p.children ?? 'Badge'}</Badge>;
/** Figma: "Status Badge [1.1]/❇️ Completed/Off" */
export const StatusBadge11CompletedOff = (p = {}) => <StatusBadge status="completed" dot={false} {...p}>{p.children ?? 'Completed'}</StatusBadge>;
/** Figma: "Bottom Sheets Header [1.1]/❇️ Success/Small (56)" */
export const BottomSheetsHeader11SuccessSmall56 = (p = {}) => <BottomSheetHeader title={p.title ?? 'Insert title'} description={p.description ?? 'Insert a description here.'} status="success" {...p} />;
/** Figma: "Bottom Sheets Header [1.1]/⬅️ Left Icon/Small (56)" */
export const BottomSheetsHeader11LeftIconSmall56 = (p = {}) => <BottomSheetHeader title={p.title ?? 'Insert title'} description={p.description ?? 'Insert a description here.'} icon="Settings2Line" {...p} />;
/** Figma: "Bottom Sheets Header [1.1]/📂 Basic/Small (56)" */
export const BottomSheetsHeader11BasicSmall56 = (p = {}) => <BottomSheetHeader title={p.title ?? 'Insert title'} description={p.description ?? 'Insert a description here.'} {...p} />;
/** Figma: "Bottom Sheets Header [1.1]/ℹ️ Information/Small (56)" */
export const BottomSheetsHeader11InformationSmall56 = (p = {}) => <BottomSheetHeader title={p.title ?? 'Insert title'} description={p.description ?? 'Insert a description here.'} status="information" {...p} />;
/** Figma: "Bottom Sheets Header [1.1]/🆘 Error/Small (56)" */
export const BottomSheetsHeader11ErrorSmall56 = (p = {}) => <BottomSheetHeader title={p.title ?? 'Insert title'} description={p.description ?? 'Insert a description here.'} status="error" {...p} />;
/** Figma: "Buttons [1.1]/Error/Filled/Default/2X-Small (28)/Off" */
export const Buttons11ErrorFilledDefault2XSmall28Off = (p = {}) => <Button tone="error" variant="filled" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Default/Small (36)/Off" */
export const Buttons11ErrorFilledDefaultSmall36Off = (p = {}) => <Button tone="error" variant="filled" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Bottom Sheets Header [1.1]/✴️ Warning/Small (56)" */
export const BottomSheetsHeader11WarningSmall56 = (p = {}) => <BottomSheetHeader title={p.title ?? 'Insert title'} description={p.description ?? 'Insert a description here.'} status="warning" {...p} />;
/** Figma: "Buttons [1.1]/Error/Filled/Default/Medium (40)/On" */
export const Buttons11ErrorFilledDefaultMedium40On = (p = {}) => <Button tone="error" variant="filled" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Default/Small (36)/On" */
export const Buttons11ErrorFilledDefaultSmall36On = (p = {}) => <Button tone="error" variant="filled" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Default/X-Small (32)/Off" */
export const Buttons11ErrorFilledDefaultXSmall32Off = (p = {}) => <Button tone="error" variant="filled" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Default/X-Small (32)/On" */
export const Buttons11ErrorFilledDefaultXSmall32On = (p = {}) => <Button tone="error" variant="filled" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Default/2X-Small (28)/On" */
export const Buttons11ErrorFilledDefault2XSmall28On = (p = {}) => <Button tone="error" variant="filled" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/Medium (40)/Off" */
export const Buttons11ErrorFilledHoverMedium40Off = (p = {}) => <Button tone="error" variant="filled" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/Medium (40)/On" */
export const Buttons11ErrorFilledHoverMedium40On = (p = {}) => <Button tone="error" variant="filled" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/Small (36)/Off" */
export const Buttons11ErrorFilledHoverSmall36Off = (p = {}) => <Button tone="error" variant="filled" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/Small (36)/On" */
export const Buttons11ErrorFilledHoverSmall36On = (p = {}) => <Button tone="error" variant="filled" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/X-Small (32)/Off" */
export const Buttons11ErrorFilledHoverXSmall32Off = (p = {}) => <Button tone="error" variant="filled" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/X-Small (32)/On" */
export const Buttons11ErrorFilledHoverXSmall32On = (p = {}) => <Button tone="error" variant="filled" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/2X-Small (28)/Off" */
export const Buttons11ErrorFilledHover2XSmall28Off = (p = {}) => <Button tone="error" variant="filled" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Hover/2X-Small (28)/On" */
export const Buttons11ErrorFilledHover2XSmall28On = (p = {}) => <Button tone="error" variant="filled" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/Medium (40)/Off" */
export const Buttons11ErrorFilledFocusMedium40Off = (p = {}) => <Button tone="error" variant="filled" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/Medium (40)/On" */
export const Buttons11ErrorFilledFocusMedium40On = (p = {}) => <Button tone="error" variant="filled" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/Small (36)/Off" */
export const Buttons11ErrorFilledFocusSmall36Off = (p = {}) => <Button tone="error" variant="filled" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/Small (36)/On" */
export const Buttons11ErrorFilledFocusSmall36On = (p = {}) => <Button tone="error" variant="filled" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/X-Small (32)/Off" */
export const Buttons11ErrorFilledFocusXSmall32Off = (p = {}) => <Button tone="error" variant="filled" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/X-Small (32)/On" */
export const Buttons11ErrorFilledFocusXSmall32On = (p = {}) => <Button tone="error" variant="filled" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/2X-Small (28)/Off" */
export const Buttons11ErrorFilledFocus2XSmall28Off = (p = {}) => <Button tone="error" variant="filled" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Focus/2X-Small (28)/On" */
export const Buttons11ErrorFilledFocus2XSmall28On = (p = {}) => <Button tone="error" variant="filled" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/Medium (40)/Off" */
export const Buttons11ErrorFilledDisabledMedium40Off = (p = {}) => <Button tone="error" variant="filled" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/Medium (40)/On" */
export const Buttons11ErrorFilledDisabledMedium40On = (p = {}) => <Button tone="error" variant="filled" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/Small (36)/Off" */
export const Buttons11ErrorFilledDisabledSmall36Off = (p = {}) => <Button tone="error" variant="filled" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/Small (36)/On" */
export const Buttons11ErrorFilledDisabledSmall36On = (p = {}) => <Button tone="error" variant="filled" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/X-Small (32)/Off" */
export const Buttons11ErrorFilledDisabledXSmall32Off = (p = {}) => <Button tone="error" variant="filled" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/X-Small (32)/On" */
export const Buttons11ErrorFilledDisabledXSmall32On = (p = {}) => <Button tone="error" variant="filled" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/2X-Small (28)/Off" */
export const Buttons11ErrorFilledDisabled2XSmall28Off = (p = {}) => <Button tone="error" variant="filled" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Filled/Disabled/2X-Small (28)/On" */
export const Buttons11ErrorFilledDisabled2XSmall28On = (p = {}) => <Button tone="error" variant="filled" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/Medium (40)/On" */
export const Buttons11ErrorStrokeDefaultMedium40On = (p = {}) => <Button tone="error" variant="stroke" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/Small (36)/Off" */
export const Buttons11ErrorStrokeDefaultSmall36Off = (p = {}) => <Button tone="error" variant="stroke" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/Small (36)/On" */
export const Buttons11ErrorStrokeDefaultSmall36On = (p = {}) => <Button tone="error" variant="stroke" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/X-Small (32)/On" */
export const Buttons11ErrorStrokeDefaultXSmall32On = (p = {}) => <Button tone="error" variant="stroke" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/2X-Small (28)/Off" */
export const Buttons11ErrorStrokeDefault2XSmall28Off = (p = {}) => <Button tone="error" variant="stroke" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Default/2X-Small (28)/On" */
export const Buttons11ErrorStrokeDefault2XSmall28On = (p = {}) => <Button tone="error" variant="stroke" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/Medium (40)/Off" */
export const Buttons11ErrorStrokeHoverMedium40Off = (p = {}) => <Button tone="error" variant="stroke" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/Medium (40)/On" */
export const Buttons11ErrorStrokeHoverMedium40On = (p = {}) => <Button tone="error" variant="stroke" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/Small (36)/Off" */
export const Buttons11ErrorStrokeHoverSmall36Off = (p = {}) => <Button tone="error" variant="stroke" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/Small (36)/On" */
export const Buttons11ErrorStrokeHoverSmall36On = (p = {}) => <Button tone="error" variant="stroke" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/X-Small (32)/Off" */
export const Buttons11ErrorStrokeHoverXSmall32Off = (p = {}) => <Button tone="error" variant="stroke" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/X-Small (32)/On" */
export const Buttons11ErrorStrokeHoverXSmall32On = (p = {}) => <Button tone="error" variant="stroke" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/2X-Small (28)/Off" */
export const Buttons11ErrorStrokeHover2XSmall28Off = (p = {}) => <Button tone="error" variant="stroke" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Hover/2X-Small (28)/On" */
export const Buttons11ErrorStrokeHover2XSmall28On = (p = {}) => <Button tone="error" variant="stroke" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/Medium (40)/Off" */
export const Buttons11ErrorStrokeFocusMedium40Off = (p = {}) => <Button tone="error" variant="stroke" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/Medium (40)/On" */
export const Buttons11ErrorStrokeFocusMedium40On = (p = {}) => <Button tone="error" variant="stroke" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/Small (36)/Off" */
export const Buttons11ErrorStrokeFocusSmall36Off = (p = {}) => <Button tone="error" variant="stroke" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/Small (36)/On" */
export const Buttons11ErrorStrokeFocusSmall36On = (p = {}) => <Button tone="error" variant="stroke" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/X-Small (32)/Off" */
export const Buttons11ErrorStrokeFocusXSmall32Off = (p = {}) => <Button tone="error" variant="stroke" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/X-Small (32)/On" */
export const Buttons11ErrorStrokeFocusXSmall32On = (p = {}) => <Button tone="error" variant="stroke" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/2X-Small (28)/Off" */
export const Buttons11ErrorStrokeFocus2XSmall28Off = (p = {}) => <Button tone="error" variant="stroke" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Focus/2X-Small (28)/On" */
export const Buttons11ErrorStrokeFocus2XSmall28On = (p = {}) => <Button tone="error" variant="stroke" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/Medium (40)/Off" */
export const Buttons11ErrorStrokeDisabledMedium40Off = (p = {}) => <Button tone="error" variant="stroke" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/Medium (40)/On" */
export const Buttons11ErrorStrokeDisabledMedium40On = (p = {}) => <Button tone="error" variant="stroke" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/Small (36)/Off" */
export const Buttons11ErrorStrokeDisabledSmall36Off = (p = {}) => <Button tone="error" variant="stroke" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/Small (36)/On" */
export const Buttons11ErrorStrokeDisabledSmall36On = (p = {}) => <Button tone="error" variant="stroke" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/X-Small (32)/Off" */
export const Buttons11ErrorStrokeDisabledXSmall32Off = (p = {}) => <Button tone="error" variant="stroke" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/X-Small (32)/On" */
export const Buttons11ErrorStrokeDisabledXSmall32On = (p = {}) => <Button tone="error" variant="stroke" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/2X-Small (28)/Off" */
export const Buttons11ErrorStrokeDisabled2XSmall28Off = (p = {}) => <Button tone="error" variant="stroke" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Stroke/Disabled/2X-Small (28)/On" */
export const Buttons11ErrorStrokeDisabled2XSmall28On = (p = {}) => <Button tone="error" variant="stroke" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/Medium (40)/On" */
export const Buttons11ErrorLighterDefaultMedium40On = (p = {}) => <Button tone="error" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/Small (36)/Off" */
export const Buttons11ErrorLighterDefaultSmall36Off = (p = {}) => <Button tone="error" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/Small (36)/On" */
export const Buttons11ErrorLighterDefaultSmall36On = (p = {}) => <Button tone="error" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/X-Small (32)/Off" */
export const Buttons11ErrorLighterDefaultXSmall32Off = (p = {}) => <Button tone="error" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/X-Small (32)/On" */
export const Buttons11ErrorLighterDefaultXSmall32On = (p = {}) => <Button tone="error" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/2X-Small (28)/Off" */
export const Buttons11ErrorLighterDefault2XSmall28Off = (p = {}) => <Button tone="error" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Default/2X-Small (28)/On" */
export const Buttons11ErrorLighterDefault2XSmall28On = (p = {}) => <Button tone="error" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/Medium (40)/Off" */
export const Buttons11ErrorLighterHoverMedium40Off = (p = {}) => <Button tone="error" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/Medium (40)/On" */
export const Buttons11ErrorLighterHoverMedium40On = (p = {}) => <Button tone="error" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/Small (36)/Off" */
export const Buttons11ErrorLighterHoverSmall36Off = (p = {}) => <Button tone="error" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/Small (36)/On" */
export const Buttons11ErrorLighterHoverSmall36On = (p = {}) => <Button tone="error" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/X-Small (32)/Off" */
export const Buttons11ErrorLighterHoverXSmall32Off = (p = {}) => <Button tone="error" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/X-Small (32)/On" */
export const Buttons11ErrorLighterHoverXSmall32On = (p = {}) => <Button tone="error" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/2X-Small (28)/Off" */
export const Buttons11ErrorLighterHover2XSmall28Off = (p = {}) => <Button tone="error" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Hover/2X-Small (28)/On" */
export const Buttons11ErrorLighterHover2XSmall28On = (p = {}) => <Button tone="error" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/Medium (40)/Off" */
export const Buttons11ErrorLighterFocusMedium40Off = (p = {}) => <Button tone="error" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/Medium (40)/On" */
export const Buttons11ErrorLighterFocusMedium40On = (p = {}) => <Button tone="error" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/Small (36)/Off" */
export const Buttons11ErrorLighterFocusSmall36Off = (p = {}) => <Button tone="error" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/Small (36)/On" */
export const Buttons11ErrorLighterFocusSmall36On = (p = {}) => <Button tone="error" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/X-Small (32)/Off" */
export const Buttons11ErrorLighterFocusXSmall32Off = (p = {}) => <Button tone="error" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/X-Small (32)/On" */
export const Buttons11ErrorLighterFocusXSmall32On = (p = {}) => <Button tone="error" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/2X-Small (28)/Off" */
export const Buttons11ErrorLighterFocus2XSmall28Off = (p = {}) => <Button tone="error" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Focus/2X-Small (28)/On" */
export const Buttons11ErrorLighterFocus2XSmall28On = (p = {}) => <Button tone="error" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/Medium (40)/Off" */
export const Buttons11ErrorLighterDisabledMedium40Off = (p = {}) => <Button tone="error" variant="lighter" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/Medium (40)/On" */
export const Buttons11ErrorLighterDisabledMedium40On = (p = {}) => <Button tone="error" variant="lighter" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/Small (36)/Off" */
export const Buttons11ErrorLighterDisabledSmall36Off = (p = {}) => <Button tone="error" variant="lighter" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/Small (36)/On" */
export const Buttons11ErrorLighterDisabledSmall36On = (p = {}) => <Button tone="error" variant="lighter" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/X-Small (32)/Off" */
export const Buttons11ErrorLighterDisabledXSmall32Off = (p = {}) => <Button tone="error" variant="lighter" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/X-Small (32)/On" */
export const Buttons11ErrorLighterDisabledXSmall32On = (p = {}) => <Button tone="error" variant="lighter" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/2X-Small (28)/Off" */
export const Buttons11ErrorLighterDisabled2XSmall28Off = (p = {}) => <Button tone="error" variant="lighter" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Lighter/Disabled/2X-Small (28)/On" */
export const Buttons11ErrorLighterDisabled2XSmall28On = (p = {}) => <Button tone="error" variant="lighter" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/Medium (40)/On" */
export const Buttons11ErrorGhostDefaultMedium40On = (p = {}) => <Button tone="error" variant="ghost" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/Small (36)/Off" */
export const Buttons11ErrorGhostDefaultSmall36Off = (p = {}) => <Button tone="error" variant="ghost" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/Small (36)/On" */
export const Buttons11ErrorGhostDefaultSmall36On = (p = {}) => <Button tone="error" variant="ghost" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/X-Small (32)/Off" */
export const Buttons11ErrorGhostDefaultXSmall32Off = (p = {}) => <Button tone="error" variant="ghost" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/X-Small (32)/On" */
export const Buttons11ErrorGhostDefaultXSmall32On = (p = {}) => <Button tone="error" variant="ghost" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/2X-Small (28)/Off" */
export const Buttons11ErrorGhostDefault2XSmall28Off = (p = {}) => <Button tone="error" variant="ghost" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Default/2X-Small (28)/On" */
export const Buttons11ErrorGhostDefault2XSmall28On = (p = {}) => <Button tone="error" variant="ghost" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/Medium (40)/Off" */
export const Buttons11ErrorGhostHoverMedium40Off = (p = {}) => <Button tone="error" variant="ghost" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/Medium (40)/On" */
export const Buttons11ErrorGhostHoverMedium40On = (p = {}) => <Button tone="error" variant="ghost" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/Small (36)/Off" */
export const Buttons11ErrorGhostHoverSmall36Off = (p = {}) => <Button tone="error" variant="ghost" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/Small (36)/On" */
export const Buttons11ErrorGhostHoverSmall36On = (p = {}) => <Button tone="error" variant="ghost" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/X-Small (32)/Off" */
export const Buttons11ErrorGhostHoverXSmall32Off = (p = {}) => <Button tone="error" variant="ghost" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/X-Small (32)/On" */
export const Buttons11ErrorGhostHoverXSmall32On = (p = {}) => <Button tone="error" variant="ghost" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/2X-Small (28)/Off" */
export const Buttons11ErrorGhostHover2XSmall28Off = (p = {}) => <Button tone="error" variant="ghost" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Hover/2X-Small (28)/On" */
export const Buttons11ErrorGhostHover2XSmall28On = (p = {}) => <Button tone="error" variant="ghost" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/Medium (40)/Off" */
export const Buttons11ErrorGhostFocusMedium40Off = (p = {}) => <Button tone="error" variant="ghost" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/Medium (40)/On" */
export const Buttons11ErrorGhostFocusMedium40On = (p = {}) => <Button tone="error" variant="ghost" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/Small (36)/Off" */
export const Buttons11ErrorGhostFocusSmall36Off = (p = {}) => <Button tone="error" variant="ghost" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/Small (36)/On" */
export const Buttons11ErrorGhostFocusSmall36On = (p = {}) => <Button tone="error" variant="ghost" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/X-Small (32)/Off" */
export const Buttons11ErrorGhostFocusXSmall32Off = (p = {}) => <Button tone="error" variant="ghost" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/X-Small (32)/On" */
export const Buttons11ErrorGhostFocusXSmall32On = (p = {}) => <Button tone="error" variant="ghost" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/2X-Small (28)/Off" */
export const Buttons11ErrorGhostFocus2XSmall28Off = (p = {}) => <Button tone="error" variant="ghost" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Focus/2X-Small (28)/On" */
export const Buttons11ErrorGhostFocus2XSmall28On = (p = {}) => <Button tone="error" variant="ghost" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/Medium (40)/Off" */
export const Buttons11ErrorGhostDisabledMedium40Off = (p = {}) => <Button tone="error" variant="ghost" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/Medium (40)/On" */
export const Buttons11ErrorGhostDisabledMedium40On = (p = {}) => <Button tone="error" variant="ghost" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/Small (36)/Off" */
export const Buttons11ErrorGhostDisabledSmall36Off = (p = {}) => <Button tone="error" variant="ghost" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/Small (36)/On" */
export const Buttons11ErrorGhostDisabledSmall36On = (p = {}) => <Button tone="error" variant="ghost" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/X-Small (32)/Off" */
export const Buttons11ErrorGhostDisabledXSmall32Off = (p = {}) => <Button tone="error" variant="ghost" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/X-Small (32)/On" */
export const Buttons11ErrorGhostDisabledXSmall32On = (p = {}) => <Button tone="error" variant="ghost" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/2X-Small (28)/Off" */
export const Buttons11ErrorGhostDisabled2XSmall28Off = (p = {}) => <Button tone="error" variant="ghost" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Error/Ghost/Disabled/2X-Small (28)/On" */
export const Buttons11ErrorGhostDisabled2XSmall28On = (p = {}) => <Button tone="error" variant="ghost" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/Medium (40)/On" */
export const Buttons11NeutralFilledDefaultMedium40On = (p = {}) => <Button tone="neutral" variant="filled" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/Small (36)/On" */
export const Buttons11NeutralFilledDefaultSmall36On = (p = {}) => <Button tone="neutral" variant="filled" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/X-Small (32)/Off" */
export const Buttons11NeutralFilledDefaultXSmall32Off = (p = {}) => <Button tone="neutral" variant="filled" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/X-Small (32)/On" */
export const Buttons11NeutralFilledDefaultXSmall32On = (p = {}) => <Button tone="neutral" variant="filled" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Default/2X-Small (28)/On" */
export const Buttons11NeutralFilledDefault2XSmall28On = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/Medium (40)/Off" */
export const Buttons11NeutralFilledHoverMedium40Off = (p = {}) => <Button tone="neutral" variant="filled" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/Medium (40)/On" */
export const Buttons11NeutralFilledHoverMedium40On = (p = {}) => <Button tone="neutral" variant="filled" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/Small (36)/Off" */
export const Buttons11NeutralFilledHoverSmall36Off = (p = {}) => <Button tone="neutral" variant="filled" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/Small (36)/On" */
export const Buttons11NeutralFilledHoverSmall36On = (p = {}) => <Button tone="neutral" variant="filled" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/X-Small (32)/Off" */
export const Buttons11NeutralFilledHoverXSmall32Off = (p = {}) => <Button tone="neutral" variant="filled" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/X-Small (32)/On" */
export const Buttons11NeutralFilledHoverXSmall32On = (p = {}) => <Button tone="neutral" variant="filled" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/2X-Small (28)/Off" */
export const Buttons11NeutralFilledHover2XSmall28Off = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Hover/2X-Small (28)/On" */
export const Buttons11NeutralFilledHover2XSmall28On = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/Medium (40)/Off" */
export const Buttons11NeutralFilledFocusMedium40Off = (p = {}) => <Button tone="neutral" variant="filled" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/Medium (40)/On" */
export const Buttons11NeutralFilledFocusMedium40On = (p = {}) => <Button tone="neutral" variant="filled" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/Small (36)/Off" */
export const Buttons11NeutralFilledFocusSmall36Off = (p = {}) => <Button tone="neutral" variant="filled" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/Small (36)/On" */
export const Buttons11NeutralFilledFocusSmall36On = (p = {}) => <Button tone="neutral" variant="filled" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/X-Small (32)/Off" */
export const Buttons11NeutralFilledFocusXSmall32Off = (p = {}) => <Button tone="neutral" variant="filled" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/X-Small (32)/On" */
export const Buttons11NeutralFilledFocusXSmall32On = (p = {}) => <Button tone="neutral" variant="filled" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/2X-Small (28)/Off" */
export const Buttons11NeutralFilledFocus2XSmall28Off = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Focus/2X-Small (28)/On" */
export const Buttons11NeutralFilledFocus2XSmall28On = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/Medium (40)/Off" */
export const Buttons11NeutralFilledDisabledMedium40Off = (p = {}) => <Button tone="neutral" variant="filled" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/Medium (40)/On" */
export const Buttons11NeutralFilledDisabledMedium40On = (p = {}) => <Button tone="neutral" variant="filled" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/Small (36)/Off" */
export const Buttons11NeutralFilledDisabledSmall36Off = (p = {}) => <Button tone="neutral" variant="filled" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/Small (36)/On" */
export const Buttons11NeutralFilledDisabledSmall36On = (p = {}) => <Button tone="neutral" variant="filled" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/X-Small (32)/Off" */
export const Buttons11NeutralFilledDisabledXSmall32Off = (p = {}) => <Button tone="neutral" variant="filled" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/X-Small (32)/On" */
export const Buttons11NeutralFilledDisabledXSmall32On = (p = {}) => <Button tone="neutral" variant="filled" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/2X-Small (28)/Off" */
export const Buttons11NeutralFilledDisabled2XSmall28Off = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Filled/Disabled/2X-Small (28)/On" */
export const Buttons11NeutralFilledDisabled2XSmall28On = (p = {}) => <Button tone="neutral" variant="filled" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Default/Medium (40)/On" */
export const Buttons11NeutralStrokeDefaultMedium40On = (p = {}) => <Button tone="neutral" variant="stroke" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/Medium (40)/Off" */
export const Buttons11NeutralStrokeHoverMedium40Off = (p = {}) => <Button tone="neutral" variant="stroke" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/Medium (40)/On" */
export const Buttons11NeutralStrokeHoverMedium40On = (p = {}) => <Button tone="neutral" variant="stroke" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/Small (36)/Off" */
export const Buttons11NeutralStrokeHoverSmall36Off = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/Small (36)/On" */
export const Buttons11NeutralStrokeHoverSmall36On = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/X-Small (32)/Off" */
export const Buttons11NeutralStrokeHoverXSmall32Off = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/X-Small (32)/On" */
export const Buttons11NeutralStrokeHoverXSmall32On = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Hover/2X-Small (28)/On" */
export const Buttons11NeutralStrokeHover2XSmall28On = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/Medium (40)/Off" */
export const Buttons11NeutralStrokeFocusMedium40Off = (p = {}) => <Button tone="neutral" variant="stroke" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/Medium (40)/On" */
export const Buttons11NeutralStrokeFocusMedium40On = (p = {}) => <Button tone="neutral" variant="stroke" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/Small (36)/Off" */
export const Buttons11NeutralStrokeFocusSmall36Off = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/Small (36)/On" */
export const Buttons11NeutralStrokeFocusSmall36On = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/X-Small (32)/Off" */
export const Buttons11NeutralStrokeFocusXSmall32Off = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/X-Small (32)/On" */
export const Buttons11NeutralStrokeFocusXSmall32On = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/2X-Small (28)/Off" */
export const Buttons11NeutralStrokeFocus2XSmall28Off = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Focus/2X-Small (28)/On" */
export const Buttons11NeutralStrokeFocus2XSmall28On = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/Medium (40)/Off" */
export const Buttons11NeutralStrokeDisabledMedium40Off = (p = {}) => <Button tone="neutral" variant="stroke" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/Medium (40)/On" */
export const Buttons11NeutralStrokeDisabledMedium40On = (p = {}) => <Button tone="neutral" variant="stroke" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/Small (36)/On" */
export const Buttons11NeutralStrokeDisabledSmall36On = (p = {}) => <Button tone="neutral" variant="stroke" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/X-Small (32)/On" */
export const Buttons11NeutralStrokeDisabledXSmall32On = (p = {}) => <Button tone="neutral" variant="stroke" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/2X-Small (28)/Off" */
export const Buttons11NeutralStrokeDisabled2XSmall28Off = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Stroke/Disabled/2X-Small (28)/On" */
export const Buttons11NeutralStrokeDisabled2XSmall28On = (p = {}) => <Button tone="neutral" variant="stroke" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/Medium (40)/On" */
export const Buttons11NeutralLighterDefaultMedium40On = (p = {}) => <Button tone="neutral" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/Small (36)/On" */
export const Buttons11NeutralLighterDefaultSmall36On = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/X-Small (32)/Off" */
export const Buttons11NeutralLighterDefaultXSmall32Off = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/X-Small (32)/On" */
export const Buttons11NeutralLighterDefaultXSmall32On = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/2X-Small (28)/Off" */
export const Buttons11NeutralLighterDefault2XSmall28Off = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Default/2X-Small (28)/On" */
export const Buttons11NeutralLighterDefault2XSmall28On = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/Medium (40)/Off" */
export const Buttons11NeutralLighterHoverMedium40Off = (p = {}) => <Button tone="neutral" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/Medium (40)/On" */
export const Buttons11NeutralLighterHoverMedium40On = (p = {}) => <Button tone="neutral" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/Small (36)/Off" */
export const Buttons11NeutralLighterHoverSmall36Off = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/Small (36)/On" */
export const Buttons11NeutralLighterHoverSmall36On = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/X-Small (32)/Off" */
export const Buttons11NeutralLighterHoverXSmall32Off = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/X-Small (32)/On" */
export const Buttons11NeutralLighterHoverXSmall32On = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/2X-Small (28)/Off" */
export const Buttons11NeutralLighterHover2XSmall28Off = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Hover/2X-Small (28)/On" */
export const Buttons11NeutralLighterHover2XSmall28On = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/Medium (40)/Off" */
export const Buttons11NeutralLighterFocusMedium40Off = (p = {}) => <Button tone="neutral" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/Medium (40)/On" */
export const Buttons11NeutralLighterFocusMedium40On = (p = {}) => <Button tone="neutral" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/Small (36)/Off" */
export const Buttons11NeutralLighterFocusSmall36Off = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/Small (36)/On" */
export const Buttons11NeutralLighterFocusSmall36On = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/X-Small (32)/Off" */
export const Buttons11NeutralLighterFocusXSmall32Off = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/X-Small (32)/On" */
export const Buttons11NeutralLighterFocusXSmall32On = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/2X-Small (28)/Off" */
export const Buttons11NeutralLighterFocus2XSmall28Off = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Focus/2X-Small (28)/On" */
export const Buttons11NeutralLighterFocus2XSmall28On = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/Medium (40)/Off" */
export const Buttons11NeutralLighterDisabledMedium40Off = (p = {}) => <Button tone="neutral" variant="lighter" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/Medium (40)/On" */
export const Buttons11NeutralLighterDisabledMedium40On = (p = {}) => <Button tone="neutral" variant="lighter" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/Small (36)/Off" */
export const Buttons11NeutralLighterDisabledSmall36Off = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/Small (36)/On" */
export const Buttons11NeutralLighterDisabledSmall36On = (p = {}) => <Button tone="neutral" variant="lighter" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/X-Small (32)/Off" */
export const Buttons11NeutralLighterDisabledXSmall32Off = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/X-Small (32)/On" */
export const Buttons11NeutralLighterDisabledXSmall32On = (p = {}) => <Button tone="neutral" variant="lighter" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/2X-Small (28)/Off" */
export const Buttons11NeutralLighterDisabled2XSmall28Off = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Lighter/Disabled/2X-Small (28)/On" */
export const Buttons11NeutralLighterDisabled2XSmall28On = (p = {}) => <Button tone="neutral" variant="lighter" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/Small (36)/Off" */
export const Buttons11NeutralGhostDefaultSmall36Off = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/X-Small (32)/Off" */
export const Buttons11NeutralGhostDefaultXSmall32Off = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/2X-Small (28)/Off" */
export const Buttons11NeutralGhostDefault2XSmall28Off = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Default/2X-Small (28)/On" */
export const Buttons11NeutralGhostDefault2XSmall28On = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/Medium (40)/Off" */
export const Buttons11NeutralGhostHoverMedium40Off = (p = {}) => <Button tone="neutral" variant="ghost" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/Medium (40)/On" */
export const Buttons11NeutralGhostHoverMedium40On = (p = {}) => <Button tone="neutral" variant="ghost" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/Small (36)/Off" */
export const Buttons11NeutralGhostHoverSmall36Off = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/Small (36)/On" */
export const Buttons11NeutralGhostHoverSmall36On = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/X-Small (32)/Off" */
export const Buttons11NeutralGhostHoverXSmall32Off = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/X-Small (32)/On" */
export const Buttons11NeutralGhostHoverXSmall32On = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/2X-Small (28)/Off" */
export const Buttons11NeutralGhostHover2XSmall28Off = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Hover/2X-Small (28)/On" */
export const Buttons11NeutralGhostHover2XSmall28On = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/Medium (40)/Off" */
export const Buttons11NeutralGhostFocusMedium40Off = (p = {}) => <Button tone="neutral" variant="ghost" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/Medium (40)/On" */
export const Buttons11NeutralGhostFocusMedium40On = (p = {}) => <Button tone="neutral" variant="ghost" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/Small (36)/Off" */
export const Buttons11NeutralGhostFocusSmall36Off = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/Small (36)/On" */
export const Buttons11NeutralGhostFocusSmall36On = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/X-Small (32)/Off" */
export const Buttons11NeutralGhostFocusXSmall32Off = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/X-Small (32)/On" */
export const Buttons11NeutralGhostFocusXSmall32On = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/2X-Small (28)/Off" */
export const Buttons11NeutralGhostFocus2XSmall28Off = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Focus/2X-Small (28)/On" */
export const Buttons11NeutralGhostFocus2XSmall28On = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/Medium (40)/Off" */
export const Buttons11NeutralGhostDisabledMedium40Off = (p = {}) => <Button tone="neutral" variant="ghost" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/Small (36)/Off" */
export const Buttons11NeutralGhostDisabledSmall36Off = (p = {}) => <Button tone="neutral" variant="ghost" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/X-Small (32)/Off" */
export const Buttons11NeutralGhostDisabledXSmall32Off = (p = {}) => <Button tone="neutral" variant="ghost" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/2X-Small (28)/Off" */
export const Buttons11NeutralGhostDisabled2XSmall28Off = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Neutral/Ghost/Disabled/2X-Small (28)/On" */
export const Buttons11NeutralGhostDisabled2XSmall28On = (p = {}) => <Button tone="neutral" variant="ghost" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Default/Medium (40)/On" */
export const Buttons11LighterDefaultMedium40On = (p = {}) => <Button tone="primary" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Default/Small (36)/Off" */
export const Buttons11LighterDefaultSmall36Off = (p = {}) => <Button tone="primary" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Default/Small (36)/On" */
export const Buttons11LighterDefaultSmall36On = (p = {}) => <Button tone="primary" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Default/X-Small (32)/On" */
export const Buttons11LighterDefaultXSmall32On = (p = {}) => <Button tone="primary" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Default/2X-Small (28)/Off" */
export const Buttons11LighterDefault2XSmall28Off = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Default/2X-Small (28)/On" */
export const Buttons11LighterDefault2XSmall28On = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/Medium (40)/Off" */
export const Buttons11LighterHoverMedium40Off = (p = {}) => <Button tone="primary" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/Medium (40)/On" */
export const Buttons11LighterHoverMedium40On = (p = {}) => <Button tone="primary" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/Small (36)/Off" */
export const Buttons11LighterHoverSmall36Off = (p = {}) => <Button tone="primary" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/Small (36)/On" */
export const Buttons11LighterHoverSmall36On = (p = {}) => <Button tone="primary" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/X-Small (32)/Off" */
export const Buttons11LighterHoverXSmall32Off = (p = {}) => <Button tone="primary" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/X-Small (32)/On" */
export const Buttons11LighterHoverXSmall32On = (p = {}) => <Button tone="primary" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/2X-Small (28)/Off" */
export const Buttons11LighterHover2XSmall28Off = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Hover/2X-Small (28)/On" */
export const Buttons11LighterHover2XSmall28On = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/Medium (40)/Off" */
export const Buttons11LighterFocusMedium40Off = (p = {}) => <Button tone="primary" variant="lighter" size="md" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/Medium (40)/On" */
export const Buttons11LighterFocusMedium40On = (p = {}) => <Button tone="primary" variant="lighter" size="md" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/Small (36)/Off" */
export const Buttons11LighterFocusSmall36Off = (p = {}) => <Button tone="primary" variant="lighter" size="sm" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/Small (36)/On" */
export const Buttons11LighterFocusSmall36On = (p = {}) => <Button tone="primary" variant="lighter" size="sm" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/X-Small (32)/Off" */
export const Buttons11LighterFocusXSmall32Off = (p = {}) => <Button tone="primary" variant="lighter" size="xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/X-Small (32)/On" */
export const Buttons11LighterFocusXSmall32On = (p = {}) => <Button tone="primary" variant="lighter" size="xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/2X-Small (28)/Off" */
export const Buttons11LighterFocus2XSmall28Off = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Focus/2X-Small (28)/On" */
export const Buttons11LighterFocus2XSmall28On = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/Medium (40)/Off" */
export const Buttons11LighterDisabledMedium40Off = (p = {}) => <Button tone="primary" variant="lighter" size="md" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/Medium (40)/On" */
export const Buttons11LighterDisabledMedium40On = (p = {}) => <Button tone="primary" variant="lighter" size="md" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/Small (36)/Off" */
export const Buttons11LighterDisabledSmall36Off = (p = {}) => <Button tone="primary" variant="lighter" size="sm" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/Small (36)/On" */
export const Buttons11LighterDisabledSmall36On = (p = {}) => <Button tone="primary" variant="lighter" size="sm" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/X-Small (32)/Off" */
export const Buttons11LighterDisabledXSmall32Off = (p = {}) => <Button tone="primary" variant="lighter" size="xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/X-Small (32)/On" */
export const Buttons11LighterDisabledXSmall32On = (p = {}) => <Button tone="primary" variant="lighter" size="xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/2X-Small (28)/Off" */
export const Buttons11LighterDisabled2XSmall28Off = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" disabled {...p}>{p.children ?? 'Button'}</Button>;
/** Figma: "Buttons [1.1]/Lighter/Disabled/2X-Small (28)/On" */
export const Buttons11LighterDisabled2XSmall28On = (p = {}) => <Button tone="primary" variant="lighter" size="2xs" disabled iconOnly leftIcon={<Icon name="FileCopyLine" />} {...p}>{p.children ?? 'Button'}</Button>;
