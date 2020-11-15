import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Initiate
//===========================================================================
const Trig_Initiate_Func066A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_Initiate_Func069A = (): void => {

	PauseUnitBJ( true, GetEnumUnit() )
	SetUnitInvulnerable( GetEnumUnit(), true )

};


const Trig_Initiate_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		SetPlayerUnitAvailableBJ( FourCC( "h005" ), true, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "n000" ), true, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "h001" ), true, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00N" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00J" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00R" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00R" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00K" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00T" ), 1, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00V" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00U" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00O" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerTechMaxAllowedSwap( FourCC( "h00P" ), 0, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "h00L" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "h00M" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "n00B" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "n00C" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerUnitAvailableBJ( FourCC( "h00S" ), false, ConvertedPlayer( GetForLoopIndexA() ) )
		SetPlayerHandicapBJ( ConvertedPlayer( GetForLoopIndexA() ), 100 )
		SetPlayerStateBJ( ConvertedPlayer( GetForLoopIndexA() ), PLAYER_STATE_RESOURCE_FOOD_CAP, 30 )
		udg_Upgrades[ GetForLoopIndexA() ] = 0;
		udg_Upgrades[ ( GetForLoopIndexA() + 8 ) ] = 0;
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	InitHashtableBJ()
	udg_XHashtable = GetLastCreatedHashtableBJ();
	udg_Continue[ 0 ] = 0;
	udg_Continue[ 1 ] = 2;
	FogEnableOff()
	FogMaskEnableOff()
	SetPlayerTechMaxAllowedSwap( FourCC( "h00J" ), 1, Player( 0 ) )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		udg_EscToggle[ GetForLoopIndexA() ] = true;
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		ForceAddPlayerSimple( ConvertedPlayer( GetForLoopIndexA() ), udg_SaveGroup )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		SetPlayerStateBJ( ConvertedPlayer( GetForLoopIndexA() ), PLAYER_STATE_RESOURCE_LUMBER, 1650 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		SetPlayerStateBJ( ConvertedPlayer( GetForLoopIndexA() ), PLAYER_STATE_RESOURCE_FOOD_CAP, 30 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 9;
	bj_forLoopAIndexEnd = 12;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		SetPlayerHandicapXPBJ( ConvertedPlayer( GetForLoopIndexA() ), 0 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	bj_forLoopAIndex = 9;
	bj_forLoopAIndexEnd = 12;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		SetPlayerHandicapBJ( ConvertedPlayer( GetForLoopIndexA() ), 125 )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	udg_String_Round[ 1 ] = "                             4 Shepherds.";
	udg_String_Round[ 2 ] = "                             4 Golems with a chance to summon rock golems.";
	udg_String_Round[ 3 ] = "                             4 ranged Sheep Hunters and their hunting dogs.";
	udg_String_Round[ 4 ] = "                             4 Stealth Sheep, with splash!";
	udg_String_Round[ 5 ] = "                             The peasants are revolting!";
	udg_String_Round[ 6 ] = "                             Archimonde (|cffff0000Boss|r|cffffcc00), don't get too close!";
	udg_String_Round[ 7 ] = "                             4 Ninja Shepards. Beware the shuriken!";
	udg_String_Round[ 8 ] = "                             4 Infernals, with immolation and bombers!";
	udg_String_Round[ 9 ] = "                             4 Frost Wyrms. Watch out for the charge!";
	udg_String_Round[ 10 ] = "                             An Insane Goblin (|cffff0000Boss|r|cffffcc00). With a god damn jet pack...";
	udg_String_Round[ 11 ] = "                             4 Ballistas, beware the line damage";
	udg_String_Round[ 12 ] = "                             4 Dreadlords, with swarms of zombies!";
	udg_String_Round[ 13 ] = "                             4 Storm Wyrms, watch out for stampedes!";
	udg_String_Round[ 14 ] = "                             4 Siege Engines, beware of Thrust and Rockets";
	udg_String_Round[ 15 ] = "                             Malfurion (|cffff0000Final Boss #1|r|cffffcc00). Run into Natural Relocation!";
	udg_String_Round[ 16 ] = "                             Grom Hellscream (|cffff0000Final Boss #2|r|cffffcc00). Beware the bladestorm!";
	udg_String_Round[ 17 ] = "                             Antonidas (|cffff0000Final Boss #3|r|cffffcc00). Good luck.";
	udg_TipString[ 1 ] = "All enemy units move 20% faster and attack 40% faster when not within 1250 range of a sheep.";
	udg_TipString[ 2 ] = "All enemy units move 5% faster after not killing a farm for 6 seconds.";
	udg_TipString[ 3 ] = "The projectiles on rounds 3, 6, 7, 10, 11, 13, 14, 16, and 17 can be blocked by farms.";
	udg_TipString[ 4 ] = "Peasants can be easily killed by frost farms, but respawn in the middle when killed.";
	udg_TipString[ 5 ] = "Boss rounds, and round 9, are immune to frost farms.";
	udg_TipString[ 6 ] = "Frost Wyrm's Icy Charge aims 200 range ahead of your sheep.";
	udg_TipString[ 7 ] = "Frost farms can kill the extra spawns on rounds 10, 15, and 17.";
	udg_TipString[ 8 ] = "The Insane Goblin's jet pack cannot turn very quickly, so make sharp turns.";
	udg_TipString[ 9 ] = "Ballista bolts move between 200-400 range after striking a building.";
	udg_TipString[ 10 ] = "Zombies can fit through graps in mass.";
	udg_TipString[ 11 ] = "Storm Wyrm's stampede slows when trampling buildings (more health=more slow).";
	udg_TipString[ 12 ] = "Malfurion's Natural Relocation works both ways, to avoid getting hit, find the center.";
	udg_TipString[ 13 ] = "Most enemy abilities are amplified when there are no nearby sheep.";
	udg_TipString[ 14 ] = "The host can type -test X to play round X.";
	udg_TipString[ 15 ] = "Grom Hellscream always leaps in front of you. Try using cliffs to your advantage.";
	udg_TimeModifier = 1.5;
	udg_SetupString[ 4 ] = "Professional";
	udg_SetupString[ 0 ] = "Amateur";
	udg_SetupString[ 1 ] = "|cffffcc00Round Time: |rNormal - 3 Minutes";
	udg_SetupString[ 2 ] = "|cffffcc00Difficulty: |rAmateur - 15 Normal Levels (2 continues)";
	udg_SetupString[ 3 ] = "|cffffcc00Revive Method: |rRound - Revive on Round End";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 0 ) ) ] = "|c00ff0000";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 1 ) ) ] = "|c000000ff";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 2 ) ) ] = "|c0004ffff";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 3 ) ) ] = "|c00800080";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 4 ) ) ] = "|c00ffff00";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 5 ) ) ] = "|c00ff8000";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 6 ) ) ] = "|c0000ff00";
	udg_PlayerColor[ GetConvertedPlayerId( Player( 7 ) ) ] = "|c00ff1aff";
	udg_TurnSpeed = 1;
	UnitAddAbilityBJ( FourCC( "A00X" ), gg_unit_n007_0048 )
	UnitAddAbilityBJ( FourCC( "A015" ), gg_unit_n007_0048 )
	udg_TempGroup = GetUnitsOfPlayerAll( Player( 0 ) );
	ForGroupBJ( udg_TempGroup, Trig_Initiate_Func066A )
	DestroyGroup( udg_TempGroup )
	udg_TempGroup = GetUnitsOfPlayerAll( Player( PLAYER_NEUTRAL_AGGRESSIVE ) );
	ForGroupBJ( udg_TempGroup, Trig_Initiate_Func069A )
	DestroyGroup( udg_TempGroup )
	TriggerExecute( gg_trg_Reset_Game )
	CreateQuestBJ( bj_QUESTTYPE_REQ_DISCOVERED, "TRIGSTR_890", "TRIGSTR_891", "ReplaceableTextures\\CommandButtons\\BTNTomeBrown.blp" )
	CreateQuestBJ( bj_QUESTTYPE_REQ_DISCOVERED, "TRIGSTR_888", "TRIGSTR_889", "ReplaceableTextures\\CommandButtons\\BTNTomeBrown.blp" )
	CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "TRIGSTR_471", "TRIGSTR_472", "ReplaceableTextures\\CommandButtons\\BTNAvatarOn.blp" )
	CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "TRIGSTR_1125", "TRIGSTR_1126", "ReplaceableTextures\\CommandButtons\\BTNStasisTrap.blp" )
	CreateQuestBJ( bj_QUESTTYPE_OPT_DISCOVERED, "TRIGSTR_549", "TRIGSTR_550", "ReplaceableTextures\\CommandButtons\\BTNStasisTrap.blp" )

};


//===========================================================================
const InitTrig_Initiate = (): void => {

	gg_trg_Initiate = CreateTrigger();
	TriggerAddAction( gg_trg_Initiate, Trig_Initiate_Actions )

};

addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Initiate();

} );

addScriptHook( W3TS_HOOK.MAIN_INIT, (): void => {

  ConditionalTriggerExecute(gg_trg_Initiate);

} );

