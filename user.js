// Change scrollbar width --3/12/25
user_pref("widget.non-native-theme.scrollbar.style", 3);

// Disable accessibility services for privacy and security
user_pref("app.normandy.enabled", false);
user_pref("app.shield.optoutstudies.enabled", false);

// Enable zooming on all pages, even on those that disable it
user_pref("apz.allow_zooming", true);
// Ensure scrollbars remain enabled while zooming on desktop
user_pref("apz.force_disable_desktop_zooming_scrollbars", false);
// Enable paint skipping for better performance when scrolling
user_pref("apz.paint_skipping.enabled", true);
// Enable direct manipulation gestures on Windows
user_pref("apz.windows.use_direct_manipulation", true);

// Disable beacon API to prevent background tracking pings
user_pref("beacon.enabled", false);

// Disable sending crash reports to Mozilla
user_pref("breakpad.reportURL", "");

// Remove warnings when accessing about:config
user_pref("browser.aboutConfig.showWarning", false);

// Disable the welcome screen on first launch
user_pref("browser.aboutwelcome.enabled", false);

// Make backspace navigate back like older browsers
user_pref("browser.backspace_action", 0);

// Prevent bookmarks menu from closing when opening links in a new tab
user_pref("browser.bookmarks.openInTabClosesMenu", false);

// Disable automatic cache on disk
user_pref("browser.cache.disk.enable", false);

// Set a maximum time (in seconds) the browser waits for cache IO operations
user_pref("browser.cache.max_shutdown_io_lag", 16);

// Show the Compact Mode option in Firefox’s UI settings
user_pref("browser.compactmode.show", true);

// Disable Firefox content analysis feature (used for recommendations)
user_pref("browser.contentanalysis.default_result", 0);
user_pref("browser.contentanalysis.enabled", false);

// Prevent Firefox from automatically submitting crash reports
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);

// Disable extension discovery feature in Add-ons Manager
user_pref("browser.discovery.enabled", false);

// Modify download behavior
// Keep the download button visible at all times
user_pref("browser.download.autohideButton", false);
// Prevent downloaded files from being added to recent documents
user_pref("browser.download.manager.addToRecentDocs", false);
// Open PDF attachments inline in the browser
user_pref("browser.download.open_pdf_attachments_inline", true);
// Save downloads to a temporary directory instead of the default downloads folder
user_pref("browser.download.start_downloads_in_tmp_dir", true);
// Always ask where to save files instead of using the default download directory
user_pref("browser.download.useDownloadDir", false);

// Disable sponsored content in the new tab page
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false);
// Enable weather display on the new tab page
user_pref("browser.newtabpage.activity-stream.showWeather", true);
// Disable telemetry collection on the new tab page
user_pref("browser.newtabpage.activity-stream.telemetry", false);
// Show detailed weather information in Fahrenheit
user_pref("browser.newtabpage.activity-stream.weather.display", "detailed");
user_pref("browser.newtabpage.activity-stream.weather.temperatureUnits", "f");
// Ensure the new tab page is enabled
user_pref("browser.newtabpage.enabled", true);

// Disable speculative page thumbnails
user_pref("browser.pagethumbnails.capturing_disabled", true);

// Disable speculative preconnections for performance
user_pref("browser.places.speculativeConnect.enabled", false);

// Improve private browsing by forcing media to use memory cache
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
// Remove promotional VPN banners in private browsing
user_pref("browser.privatebrowsing.vpnpromourl", "");
// Prevent separation of private and non-private windows
user_pref("browser.privateWindowSeparation.enabled", false);

// Disable Safe Browsing (not recommended for security reasons)
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");

// Disable search engine updates
user_pref("browser.search.update", false);

// Limit session history cache
user_pref("browser.sessionhistory.max_total_viewers", 4);

// Increase the interval at which session data is saved (in milliseconds)
user_pref("browser.sessionstore.interval", 60000);

// Only restore pinned tabs when requested after restarting
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", true);

// Disable the default browser check on startup
user_pref("browser.shell.checkDefaultBrowser", false);

// Disable shopping-related features in Firefox
user_pref("browser.shopping.experience2023.enabled", false);

// Disable tab crash reporting
user_pref("browser.tabs.crashReporting.sendReport", false);

// Open bookmarks in a new tab instead of the current tab
user_pref("browser.tabs.loadBookmarksInTabs", true);

// Disable the warning when closing multiple tabs
user_pref("browser.tabs.warnOnClose", false);

// Disable Firefox’s built-in translation feature
user_pref("browser.translations.enable", false);

// Disable the Firefox UI tour that provides feature introductions
user_pref("browser.uitour.enabled", false);

// Modify URL bar suggestions
user_pref("browser.urlbar.addons.featureGate", false);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("browser.urlbar.fakespot.featureGate", false);
user_pref("browser.urlbar.mdn.featureGate", false);
user_pref("browser.urlbar.pocket.featureGate", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.suggest.bookmark", true);
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.trending.featureGate", false);
user_pref("browser.urlbar.trimHttps", false);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.weather.featureGate", false);
user_pref("browser.urlbar.yelp.featureGate", false);

// Enable warning on quit
user_pref("browser.warnOnQuit", true);

// Enable full-page zoom instead of text-only zoom
user_pref("browser.zoom.full", true);

// Disable captive portal detection
user_pref("captivedetect.canonicalURL", "");

// Adjust content notification interval for performance
user_pref("content.notify.interval", 100000);

// Disable automatic cookie banner handling
user_pref("cookiebanners.service.mode", 0);
user_pref("cookiebanners.service.mode.privateBrowsing", 0);

// Completely disable telemetry and data collection
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.firstRunURL", "");

// Disable accessibility features in developer tools
user_pref("devtools.accessibility.enabled", false);

// Enable word wrapping in the developer tools debugger
user_pref("devtools.debugger.ui.editor-wrapping", true);

// Increase DNS cache entries for improved performance
user_pref("dnsCacheEntries", 2000);

// Enable word wrapping in view-source mode
user_pref("view_source.wrap_long_lines", true);

// Disable hiding pointer while typing in GTK environments
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// Disable battery status API to prevent websites from tracking device battery level
user_pref("dom.battery.enabled", false);

// Prevent web pages from moving or resizing browser windows
user_pref("dom.disable_window_move_resize", true);

// Disable JavaScript clipboard event tracking to improve privacy
user_pref("dom.event.clipboardevents.enabled", false);

// Disable forced scroll wheel delta mode adjustments
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);

// Disable gamepad API to prevent websites from accessing connected game controllers
user_pref("dom.gamepad.enabled", false);

// Disable EcoQoS for background processes to avoid performance throttling
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// Disable push notifications to prevent background web push messages
user_pref("dom.push.enabled", false);

// Force all connections to use HTTPS when possible
user_pref("dom.security.https_only_mode", true);

// Disable desktop notifications from websites
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Allow extensions to function in Private Browsing Mode by default
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// Disable Firefox’s built-in extension blocklist
user_pref("extensions.blocklist.enabled", false);

// Enable autofill for addresses
user_pref("extensions.formautofill.addresses.enabled", true);

// Enable autofill for credit card forms
user_pref("extensions.formautofill.creditCards.enabled", true);

// Disable the automatic fetching of extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.showPane", false);

// Disable recommended add-ons in about:addons
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable Pocket integration in Firefox
user_pref("extensions.pocket.enabled", false);

// Disable the ability to upload screenshots via Firefox’s built-in screenshot tool
user_pref("extensions.screenshots.upload-disabled", true);

// Prevent automatic updates of system add-ons
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");

// Enable automatic updates for installed extensions
user_pref("extensions.update.autoUpdateDefault", true);
user_pref("extensions.update.enabled", true);

// Remove restricted domain protections for WebExtensions
user_pref("extensions.webextensions.restrictedDomains", "");

// Disable battery status API to prevent websites from tracking device battery level
user_pref("dom.battery.enabled", false);

// Prevent web pages from moving or resizing browser windows
user_pref("dom.disable_window_move_resize", true);

// Disable JavaScript clipboard event tracking to improve privacy
user_pref("dom.event.clipboardevents.enabled", false);

// Disable forced scroll wheel delta mode adjustments
user_pref("dom.event.wheel-deltaMode-lines.always-disabled", true);

// Disable gamepad API to prevent websites from accessing connected game controllers
user_pref("dom.gamepad.enabled", false);

// Disable EcoQoS for background processes to avoid performance throttling
user_pref("dom.ipc.processPriorityManager.backgroundUsesEcoQoS", false);

// Disable push notifications to prevent background web push messages
user_pref("dom.push.enabled", false);

// Force all connections to use HTTPS when possible
user_pref("dom.security.https_only_mode", true);

// Disable desktop notifications from websites
user_pref("dom.webnotifications.enabled", false);
user_pref("dom.webnotifications.serviceworker.enabled", false);

// Allow extensions to function in Private Browsing Mode by default
user_pref("extensions.allowPrivateBrowsingByDefault", true);

// Disable Firefox’s built-in extension blocklist
user_pref("extensions.blocklist.enabled", false);

// Enable autofill for addresses
user_pref("extensions.formautofill.addresses.enabled", true);

// Enable autofill for credit card forms
user_pref("extensions.formautofill.creditCards.enabled", true);

// Disable the automatic fetching of extension metadata
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.showPane", false);

// Disable recommended add-ons in about:addons
user_pref("extensions.htmlaboutaddons.discover.enabled", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);

// Disable Pocket integration in Firefox
user_pref("extensions.pocket.enabled", false);

// Disable the ability to upload screenshots via Firefox’s built-in screenshot tool
user_pref("extensions.screenshots.upload-disabled", true);

// Prevent automatic updates of system add-ons
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");

// Enable automatic updates for installed extensions
user_pref("extensions.update.autoUpdateDefault", true);
user_pref("extensions.update.enabled", true);

// Remove restricted domain protections for WebExtensions
user_pref("extensions.webextensions.restrictedDomains", "");

// Highlight all matches when searching with Findbar
user_pref("findbar.highlightAll", true);
user_pref("findbar.modalHighlight", true);

// Remove fullscreen transition delays
user_pref("full-screen-api.transition.timeout", 0);
user_pref("full-screen-api.transition-duration.enter", 0 0);
user_pref("full-screen-api.transition-duration.leave", 0 0);

// Adjust fullscreen warning delay and timeout
user_pref("full-screen-api.warning.delay", 50);
user_pref("full-screen-api.warning.timeout", 50);

// Customize smooth scrolling behavior
user_pref("general.smoothScroll.currentVelocityWeighting", "0.12");
user_pref("general.smoothScroll.durationToIntervalRatio", 1000);
user_pref("general.smoothScroll.lines.durationMaxMS", 100);
user_pref("general.smoothScroll.lines.durationMinMS", 0);
user_pref("general.smoothScroll.mouseWheel.durationMaxMS", 100);
user_pref("general.smoothScroll.mouseWheel.durationMinMS", 0);
user_pref("general.smoothScroll.mouseWheel.migrationPercent", 100);
user_pref("general.smoothScroll.msdPhysics.continuousMotionMaxDeltaMS", 12);
user_pref("general.smoothScroll.msdPhysics.enabled", true);
user_pref("general.smoothScroll.msdPhysics.motionBeginSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.regularSpringConstant", 200);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaMS", 10);
user_pref("general.smoothScroll.msdPhysics.slowdownMinDeltaRatio", "1.20");
user_pref("general.smoothScroll.msdPhysics.slowdownSpringConstant", 1000);
user_pref("general.smoothScroll.other.durationMaxMS", 100);
user_pref("general.smoothScroll.other.durationMinMS", 0);
user_pref("general.smoothScroll.pages.durationMaxMS", 100);
user_pref("general.smoothScroll.pages.durationMinMS", 0);
user_pref("general.smoothScroll.pixels.durationMaxMS", 100);
user_pref("general.smoothScroll.pixels.durationMinMS", 0);
user_pref("general.smoothScroll.scrollbars.durationMaxMS", 100);
user_pref("general.smoothScroll.scrollbars.durationMinMS", 0);
user_pref("general.smoothScroll.stopDecelerationWeighting", "0.6");

// Enable geolocation services (change to false to disable)
user_pref("geo.enabled", true);

// Disable Windows-specific geolocation services
user_pref("geo.provider.ms-windows-location", false);
// Remove external geolocation provider URL
user_pref("geo.provider.network.url", "");
// Disable CoreLocation on macOS
user_pref("geo.provider.use_corelocation", false);
// Disable Geoclue (Linux geolocation provider)
user_pref("geo.provider.use_geoclue", false);

// Enable hardware acceleration for canvas rendering
user_pref("gfx.canvas.accelerated", true);
// Set the cache size for accelerated canvas rendering
user_pref("gfx.canvas.accelerated.cache-size", 512);

// Set the Skia font cache size for content rendering
user_pref("gfx.content.skia-font-cache-size", 20);

// Configure font rendering settings for ClearType
user_pref("gfx.font_rendering.cleartype_params.cleartype_level", 100);
user_pref("gfx.font_rendering.cleartype_params.force_gdi_classic_for_families", "");
user_pref("gfx.font_rendering.cleartype_params.rendering_mode", 5);

// Disable the use of GDI table loading in DirectWrite
user_pref("gfx.font_rendering.directwrite.use_gdi_table_loading", false);

// Set image decoding chunk size to optimize performance
user_pref("image.mem.decode_bytes_at_a_time", 131072);

// Enable asynchronous pan and zoom for smoother scrolling
user_pref("layers.async-pan-zoom.enabled", true);

// Enable various CSS features
user_pref("layout.css.color-mix.enabled", true);
user_pref("layout.css.grid-template-masonry-value.enabled", true);
user_pref("layout.css.has-selector.enabled", true);
user_pref("layout.css.light-dark.enabled", true);
user_pref("layout.css.scroll-behavior.spring-constant", "250.0");
user_pref("layout.css.visited_links_enabled", true);

// Set default spellcheck mode (2 = enable for all text fields)
user_pref("layout.spellcheckDefault", 2);

// Prevent selection from consuming the trailing space of a word
user_pref("layout.word_select.eat_space_to_next_word", false);

// Configure media autoplay behavior
user_pref("media.autoplay.default", 5);
user_pref("media.block-autoplay-until-in-foreground", false);
user_pref("media.block-play-until-document-interaction", true);
user_pref("media.block-play-until-visible", true);

// Configure media caching limits
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

// Disable hardware media keys support
user_pref("media.hardwaremediakeys.enabled", false);

// Enable WebM support for media playback
user_pref("media.mediasource.webm.enabled", true);

// Set the maximum memory cache size for media
user_pref("media.memory_cache_max_size", 65536);

// Disable WebRTC to prevent IP leaks
user_pref("media.navigator.enabled", false);

// Disable Web Speech API synthesis (text-to-speech)
user_pref("media.webspeech.synth.enabled", false);
// Set mouse wheel acceleration factor (higher values increase acceleration speed)
user_pref("mousewheel.acceleration.factor", 3);
// Disable mouse wheel acceleration start (set to -1 to disable)
user_pref("mousewheel.acceleration.start", -1);
// Adjust default scroll speed multipliers for different axes
user_pref("mousewheel.default.delta_multiplier_x", 100);
user_pref("mousewheel.default.delta_multiplier_y", 300); // Corrected duplicated setting
user_pref("mousewheel.default.delta_multiplier_z", 100);
// Set minimum scroll amount per line (0 means system default)
user_pref("mousewheel.min_line_scroll_amount", 0);
// Enable system scroll overrides for smoother scrolling
user_pref("mousewheel.system_scroll_override.enabled", true);
// Disable system scroll override for root content
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false);
// Set timeout duration (in ms) for mouse wheel transactions
user_pref("mousewheel.transaction.timeout", 1500);

// Disable captive portal detection (used in public networks)
user_pref("network.captive-portal-service.enabled", false);
// Disable connectivity checks to prevent background network requests
user_pref("network.connectivity-service.enabled", false);

// Disable DNS prefetching to prevent unnecessary network lookups
user_pref("network.dns.disablePrefetch", true);
// Disable DNS prefetching for HTTPS pages for additional privacy
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// Set DNS cache expiration time (in seconds)
user_pref("network.dnsCacheExpiration", 7200);
// Set grace period for expiring DNS cache entries
user_pref("network.dnsCacheExpirationGracePeriod", 3600);

// Disable speculative HTTP connections to prevent preloading unwanted requests
user_pref("network.http.speculative-parallel-limit", 0);

// Prevent Firefox from automatically switching to offline mode
user_pref("network.manage-offline-status", false);

// Disable Firefox’s network predictor (reduces background network activity)
user_pref("network.predictor.enabled", false);
// Disable prefetching URLs predicted by Firefox
user_pref("network.predictor.enable-prefetch", false);
// Disable link prefetching to prevent automatic background loading
user_pref("network.prefetch-next", false);

// Ensure SOCKS proxy handles DNS requests when using a proxy
user_pref("network.proxy.socks_remote_dns", true);

// Increase SSL token cache capacity for improved performance
user_pref("network.ssl_tokens_cache_capacity", 32768);

// Set Trusted Recursive Resolver (TRR) mode (5 = disable TRR and use system DNS)
user_pref("network.trr.mode", 5);

// Set default zoom level for PDF viewer
user_pref("pdfjs.defaultZoomValue", "125");
// Set sidebar view mode in the built-in PDF viewer (2 = thumbnails)
user_pref("pdfjs.sidebarViewOnLoad", 2);
// Set visual theme for PDF viewer (2 = dark mode)
user_pref("pdfjs.viewerCssTheme", 2);

// Set default permissions for desktop notifications (2 = block by default)
user_pref("permissions.default.desktop-notification", 2);
// Remove default permission manager URL
user_pref("permissions.manager.defaultsUrl", "");

// Disable Flash plugin (set to 0 for full disable)
user_pref("plugin.state.flash", 0);

// Clear browsing history and downloads on shutdown
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);

// Disable first-party isolation (prevents cookies from being shared across sites)
user_pref("privacy.firstparty.isolate", false);

// Disable Global Privacy Control (GPC) feature
user_pref("privacy.globalprivacycontrol.enabled", false);
user_pref("privacy.globalprivacycontrol.functionality.enabled", false);

// Disable Firefox’s fingerprinting resistance (reduces usability issues)
user_pref("privacy.resistFingerprinting", false);

// Disable built-in tracking protection for cryptomining, fingerprinting, and social tracking
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);

// Disable container tabs feature (privacy feature to isolate browsing sessions)
user_pref("privacy.userContext.enabled", false);

// Disable Reader Mode auto-parsing on page load
user_pref("reader.parse-on-load.enabled", false);

// Disable usage of enterprise security root certificates
user_pref("security.enterprise_roots.enabled", false);

// Disable warning text for insecure HTTP connections
user_pref("security.insecure_connection_text.enabled", false);

// Enable form autofill for login fields
user_pref("signon.autofillForms", true);
// Disable Firefox Relay integration for email masking
user_pref("signon.firefoxRelay.feature", "");
// Enable capturing login fields even if they don’t have form elements
user_pref("signon.formlessCapture.enabled", true);
// Set mouse wheel acceleration factor (higher values increase acceleration speed)
user_pref("mousewheel.acceleration.factor", 3);
// Disable mouse wheel acceleration start (set to -1 to disable)
user_pref("mousewheel.acceleration.start", -1);
// Adjust default scroll speed multipliers for different axes
user_pref("mousewheel.default.delta_multiplier_x", 100);
user_pref("mousewheel.default.delta_multiplier_y", 300); // Corrected duplicated setting
user_pref("mousewheel.default.delta_multiplier_z", 100);
// Set minimum scroll amount per line (0 means system default)
user_pref("mousewheel.min_line_scroll_amount", 0);
// Enable system scroll overrides for smoother scrolling
user_pref("mousewheel.system_scroll_override.enabled", true);
// Disable system scroll override for root content
user_pref("mousewheel.system_scroll_override_on_root_content.enabled", false);
// Set timeout duration (in ms) for mouse wheel transactions
user_pref("mousewheel.transaction.timeout", 1500);

// Disable captive portal detection (used in public networks)
user_pref("network.captive-portal-service.enabled", false);
// Disable connectivity checks to prevent background network requests
user_pref("network.connectivity-service.enabled", false);

// Disable DNS prefetching to prevent unnecessary network lookups
user_pref("network.dns.disablePrefetch", true);
// Disable DNS prefetching for HTTPS pages for additional privacy
user_pref("network.dns.disablePrefetchFromHTTPS", true);
// Set DNS cache expiration time (in seconds)
user_pref("network.dnsCacheExpiration", 7200);
// Set grace period for expiring DNS cache entries
user_pref("network.dnsCacheExpirationGracePeriod", 3600);

// Disable speculative HTTP connections to prevent preloading unwanted requests
user_pref("network.http.speculative-parallel-limit", 0);

// Prevent Firefox from automatically switching to offline mode
user_pref("network.manage-offline-status", false);

// Disable Firefox’s network predictor (reduces background network activity)
user_pref("network.predictor.enabled", false);
// Disable prefetching URLs predicted by Firefox
user_pref("network.predictor.enable-prefetch", false);
// Disable link prefetching to prevent automatic background loading
user_pref("network.prefetch-next", false);

// Ensure SOCKS proxy handles DNS requests when using a proxy
user_pref("network.proxy.socks_remote_dns", true);

// Increase SSL token cache capacity for improved performance
user_pref("network.ssl_tokens_cache_capacity", 32768);

// Set Trusted Recursive Resolver (TRR) mode (5 = disable TRR and use system DNS)
user_pref("network.trr.mode", 5);

// Set default zoom level for PDF viewer
user_pref("pdfjs.defaultZoomValue", "125");
// Set sidebar view mode in the built-in PDF viewer (2 = thumbnails)
user_pref("pdfjs.sidebarViewOnLoad", 2);
// Set visual theme for PDF viewer (2 = dark mode)
user_pref("pdfjs.viewerCssTheme", 2);

// Set default permissions for desktop notifications (2 = block by default)
user_pref("permissions.default.desktop-notification", 2);
// Remove default permission manager URL
user_pref("permissions.manager.defaultsUrl", "");

// Disable Flash plugin (set to 0 for full disable)
user_pref("plugin.state.flash", 0);

// Clear browsing history and downloads on shutdown
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);

// Disable first-party isolation (prevents cookies from being shared across sites)
user_pref("privacy.firstparty.isolate", false);

// Disable Global Privacy Control (GPC) feature
user_pref("privacy.globalprivacycontrol.enabled", false);
user_pref("privacy.globalprivacycontrol.functionality.enabled", false);

// Disable Firefox’s fingerprinting resistance (reduces usability issues)
user_pref("privacy.resistFingerprinting", false);

// Disable built-in tracking protection for cryptomining, fingerprinting, and social tracking
user_pref("privacy.trackingprotection.cryptomining.enabled", false);
user_pref("privacy.trackingprotection.enabled", false);
user_pref("privacy.trackingprotection.fingerprinting.enabled", false);
user_pref("privacy.trackingprotection.socialtracking.enabled", false);

// Disable container tabs feature (privacy feature to isolate browsing sessions)
user_pref("privacy.userContext.enabled", false);

// Disable Reader Mode auto-parsing on page load
user_pref("reader.parse-on-load.enabled", false);

// Disable usage of enterprise security root certificates
user_pref("security.enterprise_roots.enabled", false);

// Disable warning text for insecure HTTP connections
user_pref("security.insecure_connection_text.enabled", false);

// Enable form autofill for login fields
user_pref("signon.autofillForms", true);
// Disable Firefox Relay integration for email masking
user_pref("signon.firefoxRelay.feature", "");
// Enable capturing login fields even if they don’t have form elements
user_pref("signon.formlessCapture.enabled", true);
// Disable password generation feature in Firefox
user_pref("signon.generation.enabled", false);
// Disable breach alerts on the password manager page
user_pref("signon.management.page.breach-alerts.enabled", false);
// Allow Firefox to remember saved passwords
user_pref("signon.rememberSignons", true);

// Enable SVG context properties
user_pref("svg.context-properties.content.enabled", true);

// Disable cosmetic animations in the UI
user_pref("toolkit.cosmeticAnimations.enabled", false);
// Disable telemetry coverage endpoint
user_pref("toolkit.coverage.endpoint.base", "");
// Opt out of telemetry coverage data collection
user_pref("toolkit.coverage.opt-out", true);
// Enable support for userChrome.css and userContent.css
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
// Adjust horizontal and vertical scroll step distances
user_pref("toolkit.scrollbox.horizontalScrollDistance", 4);
user_pref("toolkit.scrollbox.verticalScrollDistance", 3);

// Completely disable telemetry collection
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);

// Disable Alt key menu access
user_pref("ui.key.menuAccessKey", 0);
// Enable reduced motion preference
user_pref("ui.prefersReducedMotion", 1);
// Set underline style for spell checker (1 = default underline)
user_pref("ui.SpellCheckerUnderlineStyle", 1);
// Enable dark mode based on system theme
user_pref("ui.systemUsesDarkTheme", 1);

// Enable word wrapping in view-source mode
user_pref("view_source.wrap_long_lines", true);

// Disable hiding pointer while typing in GTK environments
user_pref("widget.gtk.hide-pointer-while-typing.enabled", false);

// Disable requirement for signed extensions
user_pref("xpinstall.signatures.required", false);
