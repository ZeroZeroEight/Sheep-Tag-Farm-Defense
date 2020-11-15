
import { addScriptHook, W3TS_HOOK } from "@zerozeroeight/w3ts";

//===========================================================================
// Trigger: Lose
//===========================================================================
const Trig_Lose_Conditions = (): boolean => {


	if ( ( ! ( CountPlayersInForceBJ( udg_Sheep ) === 0 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lose_Func002Func001C = (): boolean => {


	if ( ( ! ( ( CountPlayersInForceBJ( udg_Sheep ) + CountPlayersInForceBJ( udg_Spirit ) ) > 1 ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lose_Func002Func002C = (): boolean => {


	if ( ( ( udg_RoundInfo[ 1 ] >= 15 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 10 ) ) ) {

		return true;

	}


	if ( ( ( udg_RoundInfo[ 1 ] === 6 ) ) ) {

		return true;

	}

	return false;

};


const Trig_Lose_Func002C = (): boolean => {


	if ( ( ! Trig_Lose_Func002Func002C() ) ) {

		return false;

	}

	return true;

};


const Trig_Lose_Func003Func001C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) === "p" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lose_Func003C = (): boolean => {


	if ( ( ! ( SubStringBJ( StringCase( udg_SetupString[ 0 ], false ), 1, 1 ) === "a" ) ) ) {

		return false;

	}

	return true;

};


const Trig_Lose_Func033002002 = (): boolean => {

	return ( GetOwningPlayer( GetFilterUnit() ) !== Player( PLAYER_NEUTRAL_AGGRESSIVE ) );

};


const Trig_Lose_Func034A = (): void => {

	RemoveUnit( GetEnumUnit() )

};


const Trig_Lose_Actions = (): void => {

	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 8;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		udg_FC[ GetForLoopIndexA() ] = 0;
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}



	if ( ( Trig_Lose_Func002C() ) ) {


		if ( ( Trig_Lose_Func002Func001C() ) ) {

			udg_SetupString[ 4 ] = udg_SaveString;
			udg_SaveString = "";

		} else {

			udg_SetupString[ 4 ] = "Heroic";

		}


	} else {

	null

	}


	if ( ( Trig_Lose_Func003C() ) ) {

		udg_TimeLasted = ( TimerGetElapsed( udg_RoundTimer ) / 2 );

	} else {


		if ( ( Trig_Lose_Func003Func001C() ) ) {

			udg_TimeLasted = ( TimerGetElapsed( udg_RoundTimer ) / 3 );

		} else {

			udg_TimeLasted = ( TimerGetElapsed( udg_RoundTimer ) / 4 );

		}


	}

	ClearTextMessagesBJ( GetPlayersAll() )
	DisableTrigger( gg_trg_Lightning_Line )
	DisableTrigger( gg_trg_Stampede )
	DisableTrigger( gg_trg_Stampede_Move )
	DisableTrigger( gg_trg_Zombie_Stream )
	DisableTrigger( gg_trg_Antirun )
	DisableTrigger( gg_trg_Mass_Link )
	DisableTrigger( gg_trg_Shuriken )
	DisableTrigger( gg_trg_Goblin_Rocket_Spray )
	DisableTrigger( gg_trg_Homing_Jump )
	DisableTrigger( gg_trg_Homing_Effect )
	DisableTrigger( gg_trg_Homing_Move )
	DisableTrigger( gg_trg_Ice_Leap )
	DisableTrigger( gg_trg_Thrust )
	DisableTrigger( gg_trg_Natural_Relocation )
	DisableTrigger( gg_trg_Axemaster )
	DisableTrigger( gg_trg_Archmage )
	DisableTrigger( GetTriggeringTrigger() )
	bj_forLoopAIndex = 1;
	bj_forLoopAIndexEnd = 30;

	while ( true ) {

		if ( bj_forLoopAIndex > bj_forLoopAIndexEnd ) break;
		DestroyEffectBJ( udg_HomingEffect[ GetForLoopIndexA() ] )
		bj_forLoopAIndex = bj_forLoopAIndex + 1;

	}


	PauseTimerBJ( true, udg_InitialTimer )
	PauseTimerBJ( true, udg_NewRoundTimer )
	PauseTimerBJ( true, udg_RobotTimer )
	PauseTimerBJ( true, udg_RoundTimer )
	DestroyTimerDialogBJ( GetLastCreatedTimerDialogBJ() )
	DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_342" )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "                             |Cffffcc00Or, " + ( udg_PlayerColor[ GetConvertedPlayerId( udg_Host ) ] + ( GetPlayerName( udg_Host ) + "|r|cffffcc00 may type|r -end |cffffcc00to end the game." ) ) ) )
	DisplayTimedTextToForce( GetPlayersAll(), 30, "TRIGSTR_500" )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "|cffffcc00Random Tip: |r" + udg_TipString[ GetRandomInt( 1, 15 ) ] ) )
	DisplayTimedTextToForce( GetPlayersAll(), 30, ( "|cffffcc00Random Tip: |r" + udg_TipString[ GetRandomInt( 1, 15 ) ] ) )
	udg_TempGroup = GetUnitsInRectMatching( GetEntireMapRect(), Condition( Trig_Lose_Func033002002 ) );
	ForGroupBJ( udg_TempGroup, Trig_Lose_Func034A )
	DestroyGroup( udg_TempGroup )
	ConditionalTriggerExecute( gg_trg_Begin_New_Game )

};


//===========================================================================
const InitTrig_Lose = (): void => {

	gg_trg_Lose = CreateTrigger();
	TriggerRegisterTimerEventPeriodic( gg_trg_Lose, 0.5 )
	TriggerAddCondition( gg_trg_Lose, Condition( Trig_Lose_Conditions ) )
	TriggerAddAction( gg_trg_Lose, Trig_Lose_Actions )

};


addScriptHook( W3TS_HOOK.MAIN_AFTER, (): void => {

  InitTrig_Lose();

} );
