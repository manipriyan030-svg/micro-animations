import { AnimationDef } from './types';
import HamburgerToggle, { generateHamburgerCode } from './hamburger-toggle';
import BellAlert, { generateBellCode } from './bell-alert';
import SpinnerDots, { generateSpinnerDotsCode } from './spinner-dots';
import SpinnerRing, { generateSpinnerRingCode } from './spinner-ring';
import Checkmark, { generateCheckmarkCode } from './checkmark';
import CloseX, { generateCloseXCode } from './close-x';
import ArrowRight, { generateArrowRightCode } from './arrow-right';
import ArrowDown, { generateArrowDownCode } from './arrow-down';
import HeartLike, { generateHeartCode } from './heart-like';
import SearchIcon, { generateSearchCode } from './search-icon';
import PlayPause, { generatePlayPauseCode } from './play-pause';
import DownloadIcon, { generateDownloadIconCode } from './download-icon';
import CopyClipboard, { generateCopyCode } from './copy-clipboard';
import TrashDelete, { generateTrashCode } from './trash-delete';
import SettingsGear, { generateGearCode } from './settings-gear';
import EyeVisibility, { generateEyeCode } from './eye-visibility';
import NotificationBadge, { generateNotifCode } from './notification-badge';
import LoadingBar, { generateLoadingBarCode } from './loading-bar';
import RefreshIcon, { generateRefreshCode } from './refresh-icon';
import PlusMinus, { generatePlusMinusCode } from './plus-minus';
import MenuDots, { generateMenuDotsCode } from './menu-dots';
import LockUnlock, { generateLockCode } from './lock-unlock';
import VolumeMute, { generateVolumeCode } from './volume-mute';
import WifiSignal, { generateWifiCode } from './wifi-signal';
import UploadIcon, { generateUploadCode } from './upload-icon';
import StarFavorite, { generateStarCode } from './star-favorite';
import BookmarkSave, { generateBookmarkCode } from './bookmark-save';
import SendIcon, { generateSendCode } from './send-icon';
import FilterIcon, { generateFilterCode } from './filter-icon';
import EditPencil, { generateEditCode } from './edit-pencil';
import ChatBubble, { generateChatBubbleCode } from './chat-bubble';
import MailIcon, { generateMailCode } from './mail-icon';
import ClockIcon, { generateClockCode } from './clock-icon';
import HomeIcon, { generateHomeCode } from './home-icon';
import ShieldCheck, { generateShieldCheckCode } from './shield-check';
import LightningBolt, { generateLightningCode } from './lightning-bolt';
import ExpandArrows, { generateExpandCode } from './expand-arrows';
import SliderToggle, { generateSliderToggleCode } from './slider-toggle';
import LoadingDotsWave, { generateLoadingDotsWaveCode } from './loading-dots-wave';
import SpinnerBars, { generateSpinnerBarsCode } from './spinner-bars';
import UserIcon, { generateUserCode } from './user-icon';
import CalendarIcon, { generateCalendarCode } from './calendar-icon';
import ZoomIn, { generateZoomInCode } from './zoom-in';
import ZoomOut, { generateZoomOutCode } from './zoom-out';
import ShareIcon, { generateShareCode } from './share-icon';
import LinkIcon, { generateLinkCode } from './link-icon';
import PulseDot, { generatePulseDotCode } from './pulse-dot';
import SpinnerPulse, { generateSpinnerPulseCode } from './spinner-pulse';
import SkeletonLoad, { generateSkeletonCode } from './skeleton-load';
import ProgressCircle, { generateProgressCircleCode } from './progress-circle';
import ThumbsUp, { generateThumbsUpCode } from './thumbs-up';
import MoonSun, { generateMoonSunCode } from './moon-sun';
import PowerButton, { generatePowerCode } from './power-button';
import SortIcon, { generateSortCode } from './sort-icon';

export const animations: AnimationDef[] = [
  { id: 'hamburger-toggle', name: 'Hamburger Menu', category: 'navigation', trigger: 'click', component: HamburgerToggle, generateCode: generateHamburgerCode },
  { id: 'bell-alert', name: 'Bell Alert', category: 'feedback', trigger: 'auto-loop', component: BellAlert, generateCode: generateBellCode },
  { id: 'spinner-dots', name: 'Spinner Dots', category: 'loading', trigger: 'auto-loop', component: SpinnerDots, generateCode: generateSpinnerDotsCode },
  { id: 'spinner-ring', name: 'Spinner Ring', category: 'loading', trigger: 'auto-loop', component: SpinnerRing, generateCode: generateSpinnerRingCode },
  { id: 'checkmark', name: 'Checkmark', category: 'feedback', trigger: 'auto-play', component: Checkmark, generateCode: generateCheckmarkCode },
  { id: 'close-x', name: 'Close X', category: 'navigation', trigger: 'hover', component: CloseX, generateCode: generateCloseXCode },
  { id: 'arrow-right', name: 'Arrow Right', category: 'navigation', trigger: 'hover', component: ArrowRight, generateCode: generateArrowRightCode },
  { id: 'arrow-down', name: 'Arrow Down', category: 'toggle', trigger: 'click', component: ArrowDown, generateCode: generateArrowDownCode },
  { id: 'heart-like', name: 'Heart Like', category: 'action', trigger: 'click', component: HeartLike, generateCode: generateHeartCode },
  { id: 'search-icon', name: 'Search', category: 'navigation', trigger: 'click', component: SearchIcon, generateCode: generateSearchCode },
  { id: 'play-pause', name: 'Play / Pause', category: 'toggle', trigger: 'click', component: PlayPause, generateCode: generatePlayPauseCode },
  { id: 'download-icon', name: 'Download', category: 'action', trigger: 'hover', component: DownloadIcon, generateCode: generateDownloadIconCode },
  { id: 'copy-clipboard', name: 'Copy', category: 'action', trigger: 'click', component: CopyClipboard, generateCode: generateCopyCode },
  { id: 'trash-delete', name: 'Trash Delete', category: 'action', trigger: 'hover', component: TrashDelete, generateCode: generateTrashCode },
  { id: 'settings-gear', name: 'Settings Gear', category: 'action', trigger: 'hover', component: SettingsGear, generateCode: generateGearCode },
  { id: 'eye-visibility', name: 'Eye Toggle', category: 'toggle', trigger: 'click', component: EyeVisibility, generateCode: generateEyeCode },
  { id: 'notification-badge', name: 'Notification', category: 'feedback', trigger: 'auto-loop', component: NotificationBadge, generateCode: generateNotifCode },
  { id: 'loading-bar', name: 'Loading Bar', category: 'loading', trigger: 'auto-loop', component: LoadingBar, generateCode: generateLoadingBarCode },
  { id: 'refresh-icon', name: 'Refresh', category: 'action', trigger: 'hover', component: RefreshIcon, generateCode: generateRefreshCode },
  { id: 'plus-minus', name: 'Plus / Minus', category: 'toggle', trigger: 'click', component: PlusMinus, generateCode: generatePlusMinusCode },
  { id: 'menu-dots', name: 'Menu Dots', category: 'navigation', trigger: 'click', component: MenuDots, generateCode: generateMenuDotsCode },
  { id: 'lock-unlock', name: 'Lock / Unlock', category: 'toggle', trigger: 'click', component: LockUnlock, generateCode: generateLockCode },
  { id: 'volume-mute', name: 'Volume / Mute', category: 'toggle', trigger: 'click', component: VolumeMute, generateCode: generateVolumeCode },
  { id: 'wifi-signal', name: 'WiFi Signal', category: 'feedback', trigger: 'auto-loop', component: WifiSignal, generateCode: generateWifiCode },
  { id: 'upload-icon', name: 'Upload', category: 'action', trigger: 'hover', component: UploadIcon, generateCode: generateUploadCode },
  { id: 'star-favorite', name: 'Star Favorite', category: 'action', trigger: 'click', component: StarFavorite, generateCode: generateStarCode },
  { id: 'bookmark-save', name: 'Bookmark Save', category: 'action', trigger: 'click', component: BookmarkSave, generateCode: generateBookmarkCode },
  { id: 'send-icon', name: 'Send', category: 'action', trigger: 'hover', component: SendIcon, generateCode: generateSendCode },
  { id: 'filter-icon', name: 'Filter', category: 'navigation', trigger: 'click', component: FilterIcon, generateCode: generateFilterCode },
  { id: 'edit-pencil', name: 'Edit Pencil', category: 'action', trigger: 'hover', component: EditPencil, generateCode: generateEditCode },
  { id: 'chat-bubble', name: 'Chat Bubble', category: 'feedback', trigger: 'auto-loop', component: ChatBubble, generateCode: generateChatBubbleCode },
  { id: 'mail-icon', name: 'Mail', category: 'action', trigger: 'hover', component: MailIcon, generateCode: generateMailCode },
  { id: 'clock-icon', name: 'Clock', category: 'feedback', trigger: 'auto-loop', component: ClockIcon, generateCode: generateClockCode },
  { id: 'home-icon', name: 'Home', category: 'navigation', trigger: 'hover', component: HomeIcon, generateCode: generateHomeCode },
  { id: 'shield-check', name: 'Shield Check', category: 'feedback', trigger: 'auto-play', component: ShieldCheck, generateCode: generateShieldCheckCode },
  { id: 'lightning-bolt', name: 'Lightning Bolt', category: 'feedback', trigger: 'auto-loop', component: LightningBolt, generateCode: generateLightningCode },
  { id: 'expand-arrows', name: 'Expand', category: 'toggle', trigger: 'click', component: ExpandArrows, generateCode: generateExpandCode },
  { id: 'slider-toggle', name: 'Slider Toggle', category: 'toggle', trigger: 'click', component: SliderToggle, generateCode: generateSliderToggleCode },
  { id: 'loading-dots-wave', name: 'Dots Wave', category: 'loading', trigger: 'auto-loop', component: LoadingDotsWave, generateCode: generateLoadingDotsWaveCode },
  { id: 'spinner-bars', name: 'Spinner Bars', category: 'loading', trigger: 'auto-loop', component: SpinnerBars, generateCode: generateSpinnerBarsCode },
  { id: 'user-icon', name: 'User', category: 'navigation', trigger: 'auto-loop', component: UserIcon, generateCode: generateUserCode },
  { id: 'calendar-icon', name: 'Calendar', category: 'action', trigger: 'auto-loop', component: CalendarIcon, generateCode: generateCalendarCode },
  { id: 'zoom-in', name: 'Zoom In', category: 'action', trigger: 'auto-loop', component: ZoomIn, generateCode: generateZoomInCode },
  { id: 'zoom-out', name: 'Zoom Out', category: 'action', trigger: 'auto-loop', component: ZoomOut, generateCode: generateZoomOutCode },
  { id: 'share-icon', name: 'Share', category: 'action', trigger: 'auto-loop', component: ShareIcon, generateCode: generateShareCode },
  { id: 'link-icon', name: 'Link', category: 'action', trigger: 'auto-loop', component: LinkIcon, generateCode: generateLinkCode },
  { id: 'pulse-dot', name: 'Pulse Dot', category: 'feedback', trigger: 'auto-loop', component: PulseDot, generateCode: generatePulseDotCode },
  { id: 'spinner-pulse', name: 'Spinner Pulse', category: 'loading', trigger: 'auto-loop', component: SpinnerPulse, generateCode: generateSpinnerPulseCode },
  { id: 'skeleton-load', name: 'Skeleton Loader', category: 'loading', trigger: 'auto-loop', component: SkeletonLoad, generateCode: generateSkeletonCode },
  { id: 'progress-circle', name: 'Progress Circle', category: 'loading', trigger: 'auto-loop', component: ProgressCircle, generateCode: generateProgressCircleCode },
  { id: 'thumbs-up', name: 'Thumbs Up', category: 'action', trigger: 'click', component: ThumbsUp, generateCode: generateThumbsUpCode },
  { id: 'moon-sun', name: 'Moon / Sun', category: 'toggle', trigger: 'click', component: MoonSun, generateCode: generateMoonSunCode },
  { id: 'power-button', name: 'Power Button', category: 'toggle', trigger: 'click', component: PowerButton, generateCode: generatePowerCode },
  { id: 'sort-icon', name: 'Sort', category: 'navigation', trigger: 'auto-loop', component: SortIcon, generateCode: generateSortCode },
];
